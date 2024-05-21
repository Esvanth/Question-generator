import express from "express";
import * as questionController from "../controllers/Question.js";

const router = express.Router();

router.post("/addQuestions", questionController.addQuestion);
router.get("/generate-paper", questionController.generateQuestionPaper);

export default router;
