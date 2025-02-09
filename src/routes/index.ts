import { Router } from "express";
import userRoutes from "../routes/user/user.route";

const router = Router();

router.use("/users", userRoutes);

export default router;
