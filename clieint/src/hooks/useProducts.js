import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../api.js";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const fetchAllProducts = async () => {
    try {
      const res = await api.get("/all-products");

      setProducts(res.data.products);
    } catch (error) {
      toast.error("something went worng !");
      console.log(error);
      return;
    }
  };

  const fetchProductById = async (productId) => {
    try {
      const res = await api.get("/product/$(productId)");
      setProduct(res.data.product);
      toast.success("res.data.message");
    } catch (error) {
      toast.error("something went worng !");
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return { products, product, fetchProductById };
};
