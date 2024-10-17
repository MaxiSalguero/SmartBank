import { Router } from "express";
import { createUser, getUser, getAllUsers, loginUser } from "../controllers/usersController";
import { validateUserId } from "../middlewares/validateUserId";
import { validateUser } from "../middlewares/validateUser";
import { validateCredential } from "../middlewares/validateCredential";

const usersRoute = Router()

usersRoute.get("/", getAllUsers)

usersRoute.get("/:id", validateUserId, getUser)

usersRoute.post("/register", validateUser, createUser)

usersRoute.post("/login", validateCredential, loginUser)

export default usersRoute