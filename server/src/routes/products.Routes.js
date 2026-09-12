import express from "express"
import { createProduct, deleteProductById, getAllProducts, getProductById, getproductsByCatid, getProductsByName } from "../controller/products.Controller.js"
import {protect} from "../middleware/protect.Middleware.js"

const router = express.Router()

router.get("/all-products",getAllProducts)
router.post("/product",protect,createProduct)
router.get("/product/:id",getProductById)

router.get("/category-product/:catid",getproductsByCatid)

router.post("/products" , getProductsByName)

router.delete("/product/:id", protect,deleteProductById)
export default router

