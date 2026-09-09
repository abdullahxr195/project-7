import express from "express"
import { getAllCategories , createCategory, getCategoryById, getCategoryByName, deleteCatergory, updateCategory } from "../controller/category.Controller.js"
import {protect} from "../middleware/protect.Middleware.js"

const router = express.Router()

router.get("/all_categories" , getAllCategories)
router.post("/create-category",protect, createCategory)
router.get("/category/:id" ,getCategoryById)
router.get("/category/:name",getCategoryByName)

router.delete("/category/:id",protect,deleteCatergory)
router.put("/category/:id", protect,updateCategory)



export default router