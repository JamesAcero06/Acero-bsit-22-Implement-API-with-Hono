import type { Context } from "hono";

export const getPosts = async (c: Context) => {
    return c.json([
        { id: 1, title: "Proyektong Backend", content: "Gumagana ang API route!" },
        { id: 2, title: "Test Success", content: "JSON response is working." }
    ]);
};
