import bcrypt from "bcryptjs";
import User from "../models/user.Model.js";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res
        .status(400)
        .json({ message: "please enter all required fields !" });
    }

    if (name.length < 3) {
      return res
        .status(400)
        .json({ message: "name must be more than 2 charceters" });
    }

    const isExist = await User.findOne({ email: email });
    if (isExist) {
      return res.status(400).json({ message: "email already exist" });
    }

    const emaildRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emaildRegex.test(email)) {
      return res.status(400).json({ message: "pleas enter a valid email!" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "password do not match" });
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "password shoud contains letters in lower case and upperaces and numbers and special charecters and at least 8 charecters length",
      });
    }

    const hashed_password = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name: name,
      email: email,
      hashed_password: hashed_password,
      phoneNumber: phoneNumber,
      role: "user",
    });

    return res
      .status(201)
      .json({ message: "create account successfully! please login!" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({
          message: "Please enter your email and your password to login",
        });
    }
    const userIsExist = await User.findOne({ email });
    if (!userIsExist) {
      return res
        .status(404)
        .json({ message: "you dont have an account please register" });
    }

    const isMatch = await bcrypt.compare(password, userIsExist.hashed_password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "email or password is not correct" });
    }
    return res.status(200).json({ message: "Login is successfully" });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }

  const tokens = jwt.sign(
    {
      id: userIsExist._id,
      name: userIsExist.name,
      email: userIsExist.email,
      role: userIsExist.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "15m" },
  );
  return res
    .status(200)
    .json({
      message: "logged in successfully",
      usre: {
        id: userIsExist._id,
        name: userIsExist.name,
        email: userIsExist.email,
        role: userIsExist.role,
      },
      tokens,
    });
};
