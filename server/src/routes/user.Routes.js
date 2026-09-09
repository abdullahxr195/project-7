import express from "express"
import { changePassword, deleteUser, getALLUsers, getUsersByEmail, getUsersById, UpdateUser } from "../controller/user.Controller.js"
import {protect} from "../middleware/protect.Middleware.js"
import { adminOnly } from "../middleware/adminOnly.Middleware.js"

const router = express.Router()

router.get("/users",protect,adminOnly,getALLUsers)
router.get("/user/:id",protect,getUsersById)
router.get("/user-email",protect,getUsersByEmail)

router.put("/user/:id",protect,UpdateUser)
router.put("/change-password/:id",protect,changePassword)
router.delete("/user/:id",protect,deleteUser)
// router.put("/update-usre-role/:id",protect,adminOnly,updateUserRole)

export default router