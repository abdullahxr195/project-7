import toast from "react-hot-toast";
import { api } from "../api";
export const useAuth = () => {
  const register = async ({
    name,
    email,
    phoneNumber,
    password,
    confirmPassword,
  }) => {
    try {
      if (!name || !email || !password || !confirmPassword) {
        toast.error("please fill all fields !");
        return;
      }

      if (password !== confirmPassword) {
        toast.error("password does not mutch ");
        return;
      }

      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (passwordRegex.test(password)) {
        toast.error(
          "password shoud contains letters in lower case and upperaces and numbers and special charecters and at least 8 charecters length",
        );
      }
      const res = await api.post("/auth/register", {
        name,
        email,
        phoneNumber,
        password,
        confirmPassword,
      });
      toast.success(res.data.message)
    } catch (error) {
      toast.error("something went wrong");
      console.error(error);
      return;
    }
  };
  return { register };
};
