import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }
}


// import mongoose from 'mongoose';
// import { UserNuevo } from '../../model/users';

// mongoose.connect("mongodb+srv://admin:admin@cluster0.ve2kx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// // creamos un user de prueba
// const usuario = new UserNuevo({
//     name: 'Usuario',
//     surname: 'Prueba 1',
//     username: 'user1',
//     password: 'user1',
//     email: 'user1@gmail.com',
// });
// // insertamos nuestro user de prueba en MongoDB database
// await usuario.save();

// // Find a single blog post
// const firstUser = await usuario.findOne({});
// console.log(firstUser);
