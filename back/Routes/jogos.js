import express from "express";
import { getJogos, insertJogos, updateJogos, deleteJogos } from "../controllers/jogos.js";

const router = express.Router();

router.get("/", getJogos);
router.post("/", insertJogos);
router.put("/:id", updateJogos);
router.delete("/:id", deleteJogos);

export default router;