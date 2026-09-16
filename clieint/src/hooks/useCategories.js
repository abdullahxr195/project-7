import { useEffect } from "react";
import { useState } from "react";
import { api } from "../api";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  const fetchAllCategories = async () => {
    try {
      const res = await api.get("/all_categories");
      console.log(res);
      setCategories(res.data.categories);
    } catch (error) {
      toast.error(error.response.data.message || "something went wrong");
    }

    useEffect(() => {
      fetchAllCategories();
    }, []);
  };

  return { categories };
};
