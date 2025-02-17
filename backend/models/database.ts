import dotenv from "dotenv";
import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";

//importamos la ruta de usuarios
import routeUsers from '../routes/userRoutes'

class Database{

    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.app.use(cors());

        this.port = process.env['PORT'] || '3000';
        this.listen();

        this.midlewares(); //siempre antes de los routes, si no, no funciona. Sin esto, hacer posts de users no funciona
        this.routes();

        this.dbConnect();
    }

    listen(){       
        this.app.listen(this.port, ()=>{
            console.log(`🚀 Servidor en http://localhost:${this.port}`);
        })
    }

    routes(){
        this.app.use('/api/usuario', routeUsers); //cuando mi url sea "localhost:puerto/api/users" y el verbo sea get, ejecutamos el trozo de codigo de getUsers
    }

    midlewares(){
        //parseamos el body
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    dbConnect(){
        // console.log("🔍 URI de MongoDB:", process.env.MONGODB_URL);
        // Conectar a MongoDB Atlas
        mongoose.connect("mongodb+srv://admin:admin@cluster0.ve2kx.mongodb.net/DatabaseMichi?retryWrites=true&w=majority&appName=Cluster0") //para acceder a .env debemos poner antes "process"
        .then(() => console.log("🟢 Conectado a MongoDB Atlas"))
        .catch(err => console.error("🔴 Error al conectar MongoDB:", err));
    }
}

export default Database;

