import User from "../models/user.Model.js";
import bcrypt from "bcryptjs";
export const getALLUsers = async (req, res) => {
  try {
    const users = await User.find({});

    if (users.length === 0) {
      return res
        .status(200)
        .json({ message: "no users registered yet", users: [] });
    }
    return res.status(200).json({ message: " users gets", users });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "no user selected " });
    }

    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "user not found !" });
    }
    return res.status(200).json({ message: "gets successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getUsersByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      const users = await User.find({});
      return res.status(200).json({ message: "gets all users", users });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found !" });
    }
    return res.status(200).json({ message: "gets successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    const { id } = req.params;

    const UpdateUser = await User.findByIdAndUpdate(
      { _id: id },
      { name, email, phoneNumber },
      { new: true },
    );

    if (!UpdateUser) {
      return res
        .status(400)
        .json({ message: "somthing went wrong please try again" });
    }
    return res.status(200).json({ message: "updated done", user: UpdateUser });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword, confirmNewPassword } = req.body;
    const { id } = req.params;

    const existedUser = await User.findById({ _id: id });

    const isMatch = await bcrypt.compare(
      oldPassword,
      confirmNewPassword.hashed_password,
    );
    if (!isMatch) {
      return res.status(400).json({ message: "old password is not correct" });
    }

    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ message: "your password dont match" });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(newPassword)) {
      return res
        .status(400)
        .json({
          message:
            "password shoud contains letters in lower case and upperaces and numbers and special charecters and at least 8 charecters length",
        });
    }

    const new_hashed_password = await bcrypt.hash(newPassword, 10);
    //10 هي درجات التشفير او عدد خطوات التشفير
    const updatedUser = await User.findByIdAndUpdate(
      { _id: id },
      { hashed_password: new_hashed_password },
      { new: true },
    );

    if (!updatedUser) {
      return res
        .status(400)
        .json({ message: "somthing went wrong please try again" });
    }
    return res.status(200).json({ message: "password changes successfully" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};


export const deleteUser = async (req , res) => {

try {
    const {id} = req.params
    if(!id){
      return res.status(400).json({message:"No User selected"})

    }
    const deletedUser = await User.findByIdAndDelete({_id:id})
    if(!deletedUser){

      return res.status(400).json({message:"User did not deleted"})
    }
    return res.status(200).json({message:"delete successfully"})

} catch (error) {
  return res.status(500).json({ message: "internal server error" });
}

}
 

