import express from "express"
import { changePassword, deleteUser, getALLUsers, getUsersByEmail, getUsersById, UpdateUser } from "../controller/user.Controller"

const router = express.Router()

router.get("/users",protect,getALLUsers)
router.get("/user/:id",protect,getUsersById)
router.get("/user-email",protect,getUsersByEmail)

router.put("/user/:id",protect,UpdateUser)
router.put("/change-password/:id",protect,changePassword)
router.delete("/user/:id",protect,deleteUser)


export default router