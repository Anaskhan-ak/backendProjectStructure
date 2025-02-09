import { Router } from "express";
import { getUsers, createUser } from "../../controllers/user/user.controller";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);

export default router;