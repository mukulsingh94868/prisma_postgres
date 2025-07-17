import { Router } from "express";
import {
    createPost,
    fetchPosts,
    showPost,
    deletePost,
    searchPost,
} from "../controller/PostController.js";

const router = Router();

router.get("/fetchPosts", fetchPosts);
router.get("/search", searchPost);
router.get("/:id", showPost);
router.post("/createPost", createPost);
// router.put("/:id", updateUser);
router.delete("/deletePost/:id", deletePost);

export default router;