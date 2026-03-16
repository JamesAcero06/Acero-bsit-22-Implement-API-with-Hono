import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import postRoutes from './routes/post.routes.js' // Dito natin in-import yung route

const app = new Hono()

// Ito ang nag-mount ng /posts route
app.route('/posts', postRoutes) 

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})