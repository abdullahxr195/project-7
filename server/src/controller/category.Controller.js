import Category from "../models/category.Model.js";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    if (categories.length === 0) {
      return res
        .status(200)
        .json({ message: "categories not added yet", categories: [] });
    }

    return res
      .status(200)
      .json({ message: "categories gets succssfully", categories });
  } catch (error) {
    console.log("error");
    return res.status(500).json({ message: "internal server error" });
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res 
        .status(400)
        .json({ message: "please enter a name , its required" });
    }

    const isExist = await Category.findOne({ name });
    if (isExist) {
      return res
        .status(400)
        .json({
          message:
            "this is category is already exist , please enter another name",
        });
    }

    const category = await Category.create({ name, description });

    if (!category) {
      return res
        .status(400)
        .json({ message: "something went wrong please try again" });
    }

    return res.status(201).json({ message: "create category done ", category });
  } catch (error) {
    return res.status(500).json({ message: "intertanl server error" });
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "no item is selected" });
    }

    const category = await Category.findById({ _id, id });

    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    return res
      .status(200)
      .json({ message: "category gets successfully", category });
  } catch (error) {
    return res.status(500).json({ message: "intertanl server error" });
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;

    if (!name) {
      return res.status(400).json({ message: "no item is selected" });
    }

    const category = await Category.findOne({ name });

    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    return res
      .status(200)
      .json({ message: "category gets successfully", category });
  } catch (error) {
    return res.status(500).json({ message: "intertanl server error" });
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const deleteCatergory = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCatergory = await Category.findByIdAndDelete({ _id, id });
    if (!deleteCatergory) {
      return res.status(400).json({ message: "can not delete category" });
    }

    return res.status(200).json({ message: "category deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "intertanl server error" });
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const updateCategory = await Category.findByIdAndUpdate(
      id,
      { name, description },
      { new: true },
    );

    if (!updateCategory) {
      return res
        .status(400)
        .json({ message: "something went wrong please try again" });
    }

    return res
      .status(200)
      .json({ message: "create category done ", category: updateCategory });
  } catch (error) {
    return res.status(500).json({ message: "intertanl server error" });
  }
};
