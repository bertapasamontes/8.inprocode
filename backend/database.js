import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config(); // Cargar variables de entorno

const app = express();
app.use(express.json());
app.use(cors());

console.log("🔍 URI de MongoDB:", process.env.MONGODB_URL);
// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("🟢 Conectado a MongoDB Atlas"))
.catch(err => console.error("🔴 Error al conectar MongoDB:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
