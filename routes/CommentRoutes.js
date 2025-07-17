import { Router } from "express";
import { createUser, updateUser, fetchUsers, showUser, deleteUser } from "../controller/UserController.js";

const router = Router();

router.post('/create-user', createUser);
router.put('/update-user/:id', updateUser);
router.get('/fetchUsers', fetchUsers);
router.get('/fetchUser/:id', showUser);
router.delete('/deleteUser/:id', deleteUser);

export default router;