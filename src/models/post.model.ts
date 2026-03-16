import type { RowDataPacket, ResultSetHeader } from "mysql2"; 
import pool from "../config/db.js"; 

export interface Post extends RowDataPacket {
  post_id: number;
  title: string;
  description: string;
  status: 'Active' | 'Inactive';
  created_at: Date;
}

export const PostModel = {
  getAll: async () => {
    const [rows] = await pool.query<Post[]>("SELECT * FROM posts");
    return rows;
  },
  
  create: async (title: string, description: string) => {
    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO posts (title, description) VALUES (?, ?)",
      [title, description]
    );
    return result.insertId;
  }
};