import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const userController = new UserController();

router.get("/", userController.getUsers.bind(userController));
router.get("/:id", userController.getUser.bind(userController));
router.post("/", userController.createUser.bind(userController));

export default router;
