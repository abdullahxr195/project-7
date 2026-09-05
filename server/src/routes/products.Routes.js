import express from "express"
import { createProduct, deleteProductById, getAllProducts, getProductById, getproductsByCatid, getProductsByName } from "../controller/products.Controller.js"


const router = express.Router()

router.get("/hetall-products",getAllProducts)
router.post("/product",createProduct)
router.get("/product/:id",getProductById)

router.get("/category-product/:catid",getproductsByCatid)

router.post("/products" , getProductsByName)

router.delete("/product/:id", deleteProductById)
export default router

