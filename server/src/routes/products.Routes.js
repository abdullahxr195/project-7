import express from "express"
import { createProduct, getAllProducts, getProductById, getproductsByCatid } from "../controller/products.Controller.js"


const router = express.Router()

router.get("/hetall-products",getAllProducts)
router.post("/product",createProduct)
router.get("/product/:id",getProductById)

router.get("/category-product/:catid",getproductsByCatid)

export default router

