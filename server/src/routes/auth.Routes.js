import express from "express"
import { register } from "../controller/auth.Controller.js"


const router = express.Router()

router.post("/auth/register",register)




export default router