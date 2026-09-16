import express from "express"
import { currentUser, login, register } from "../controller/auth.Controller.js"
import { protect } from "../middleware/protect.Middleware.js"


const router = express.Router()

router.post("/auth/register",register)
router.post("/auth/login",login)
router.post("/auth/me",protect,currentUser)


export default router