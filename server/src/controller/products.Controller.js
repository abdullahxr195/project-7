import Product from "../models/products.Model.js";


export const getAllProducts = async (erq, res) => {
  try {
    const products = await Product.find();
    if (products.length) {
      return res.status(200).json({ message: "No Product yet", Products: [] });
    }

    return res.status(200).json({ message: "Product succesffuly", products });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, stock, price, image, catId } = req.body;

    if (!name || !price || !stock || !catId) {
      return res.status(400).json({
        message: "please enter product name and stocks and category name",
      });
    }

    if (price <= 0 || stock <= 0) {
      return res
        .status(400)
        .json({ message: "product price and stock must be positive number" });
    }

    const isCatExist = await Category.findById({ _id: catId });
    if (!isCatExist) {
      return res
        .status(404)
        .json({ message: "the selected category is not find !" });
    }

    const product = await Product.creatr({
      name,
      description,
      stock,
      price,
      image,
      catId,
    });
    if (!product) {
      return res
        .status(400)
        .json({ message: "something went wrong please try again!" });
    }
    return res
      .status(201)
      .json({ message: "product create successfully", product });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "no selected item" });
    }

    const product = await Product.findById({ _id, id });
    if (!product) {
      return res.status(404).json({ message: "product is not fuond" });
    }

    return res.status(200).json({ message: "fuond", product });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getproductsByCatid = async (req, res) => {
  try {
    const { catId } = req.params;
    if (!catId) {
      return res.status(400).json({ message: "no selected item" });
    }

    const products = await Product.find({ catId: catId });
    if (products.length === 0) {
      return res
        .status(200)
        .json({ message: "this category has no products yet", products: [] });
    }

    return res.status(200).json({ message: "fuond", products });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const getProductsByName = async (req, res) => {
  try {
    const name = req.body.name;

    const products = await Product.find({});

    if (!name) {
      return res.status(200).json({ message: "all product fetched", products });
    }

    const productByName = await Product.find({ name: name });

    if (productByName.length === 0) {
      return res.status(200).json({ message: "check these results", products });
    }

    return res
      .status(200)
      .json({ message: "gets done", products: productByName });
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "no selected item" });
    }

    const found = await Product.findByIdAndDelete({ _id: id });
    if (!found) {
      return res.status(404).json({ message: "not found" });
    }
    return res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "internal server error" });
  }
};

