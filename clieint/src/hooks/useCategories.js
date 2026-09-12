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
      console.error(error);
    }

    useEffect(() => {
      fetchAllCategories();
    }, []);
  };

  return { categories };
};
