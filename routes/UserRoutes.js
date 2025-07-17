import { Router } from "express";
import { createUser } from "../controller/UserController.js";

const router = Router();

router.post('/create-user', createUser);

export default router;