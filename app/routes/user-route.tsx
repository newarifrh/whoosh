import { Router } from "express";
import {
  index,
  show,
  store,
  update,
  destroy,
} from "../controllers/user-controller";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.get("/users/", index);
router.get("/users/:id", show);
router.post("/users/", authMiddleware, store);
router.put("/users/:id", update);
router.delete("/users/:id", destroy);

export default router;
