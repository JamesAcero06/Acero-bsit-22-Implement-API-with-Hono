import { Hono } from "hono";
import { getPosts } from "../controllers/post.controller.js"; // Siguraduhing tama ang path

const postRoutes = new Hono();

// Ito ang nagkakabit ng path sa logic ng controller
postRoutes.get("/", getPosts); 

export default postRoutes;