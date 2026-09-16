import toast from "react-hot-toast";
import { api } from "../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
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
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message || "something went wrong");
      console.log(error)
      return;
    }
  };

  const login = async ({ email, password }) => {
    try {
      if (!email || !password) {
        toast.error("Please fill all fields ");
        return;
      }
      const res = await api.post("/auth/login", { email, password });
      toast.success(res.data.message);
      const { user, tokens } = res.data;
      localStorage.setItem("tokens", JSON.stringify(tokens));
      if(user.role === "admin") navigate("/admin/dashbord")
        if(user.role === "user")navigate("/store-home")

      
    } catch (error) {
      toast.error(error.response.data.message || "something went wrong");
      console.log(error)
      return
    }
  };

  const logout = async () => {
    try {
      await localStorage.removeItem("currentUser");
      await localStorage.removeItem("tokens");
      setCurrentUser({})
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went wrong");
      console.log(error)
      return;
    }
  };

  const authMe = async () => {
    try {
        const res = await api.get("/auth/me")
        setCurrentUser(res.data.currentUser)
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went wrong");
      console.log(error)
      return;
    }
  };


  return { register, login, logout , currentUser ,authMe};
};
