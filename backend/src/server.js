import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();

// Initialize express app
const app = express();
// Puerto de la aplicación
const PORT = process.env.PORT || 5001;

//middleware
app.use(
  cors({
    origin:"http://localhost:5173"
  })
); 

// Parse JSON bodies
app.use(express.json());
// Limitador de tasa de solicitudes
app.use(rateLimiter);
// Rutas
app.use("/api/notes", notesRoutes);

// Ruta de inicio con MongoDB
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT", PORT);
  });
});
