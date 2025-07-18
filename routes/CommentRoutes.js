import { Router } from "express";
import {
  createComment,
  fetchComments,
  showComment,
  deleteComment,
} from "../controller/CommentController.js";

const router = Router();

router.get("/fetchComment", fetchComments);
router.get("/fetchComment/:id", showComment);
router.post("/createComment", createComment);
// router.put("/:id", updateUser);
router.delete("/deleteComment/:id", deleteComment);

export default router;