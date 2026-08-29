import express from "express"
import { getAllCategories , createCategory, getCategoryById, getCategoryByName, deleteCatergory, updateCategory } from "../controller/category.Controller.js"


const router = express.Router()

router.get("/all_categories" , getAllCategories)
router.post("/create-category", createCategory)
router.get("/category/:id" ,getCategoryById)
router.get("/category/:name",getCategoryByName)

router.delete("/category/:id",deleteCatergory)
router.put("/category/:id",updateCategory)



export default router