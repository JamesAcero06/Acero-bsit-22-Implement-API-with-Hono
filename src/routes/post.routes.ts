import { Hono } from "hono";
import { getPosts } from "../controllers/post.controller.js"; 

const postRoutes = new Hono();

postRoutes.get("/", getPosts); 

export default postRoutes;
