import UserNuevo from '../../src/app/model/users.js';

import { Request, Response } from 'express';

//para usar estas funciones, hay que añadirlas al module.export
export const getUsers = async (req:Request, res:Response)=> {
    const ListUsuarios = await UserNuevo.find()
    .then((respuesta: any)=>{
        res.json(ListUsuarios)
    })
    .catch((error:any) =>{
        res.json({
            message: 'Ocurrió un error en la función GetUsers'
        })
    })
}

export const getOneUser = async (req:Request, res: Response)=>{
    const {body} = req;
    const {id} = req.params;
    const userSolitario = await UserNuevo.findById(id);

    if(userSolitario){
        res.json(userSolitario);
    } else{
        res.status(404).json({
            mensaje: 'No existe un user con el id ${id}'
        })
    }

    // res.json({
    //     mensaje: 'get a user',
    //     id: req.params.id,
    //     body
    // })
}

export const deleteOneUser = (req:Request, res: Response)=>{
    res.json({
        mensaje: 'delete a user',
        id: req.params.id
    })
}

export const postUser = (req:Request, res: Response)=>{
    const {body} = req;
    res.json({
        mensaje: 'post a user',
        body
    })
    // const user = new UserNuevo(req.body);
    // user
    //     .save()
    //     .then((data)=> res.json(data))
    //     .catch((error)=> res.json({
    //         mensaje: error
    //     }))
}

export const updateUser = (req:Request, res: Response)=>{
    // const {body} = req;
    // const {id} = req.params;
    // res.json({
    //     mensaje: 'Update a user',
    //     id,
    //     body
    // })

    const user = new UserNuevo(req.body);
    user
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({
            mensaje: error
        }))
}


//show list of users
export const usersIndex = (req: Request, res: Response)=>{
    UserNuevo.find()
    .then((respuesta: any)=>{
        res.json({
            respuesta
        })
    })
    .catch((error:any) =>{
        res.json({
            message: 'Ocurrió un error en la función Index'
        })
    })
}

// show single user
export const showUser  = (req: any, res: any, next: any) =>{
    let userId = req.params.id;
    UserNuevo.findById(userId)
    .then(respuesta =>{
        res.json({
            respuesta: "Aqui tu user",
            id: req.params.id
        })
    })
    .catch((error:any)=>{
        res.json({
            message: 'Un error ocurrió en showUser()'
        })
    })
}

// add user into database
const addUserToDB = (req: { body: { name: any; surname: any; username: any; password: any; email: any;}; }, res: any, next: any) => {
    let user = new UserNuevo({
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    user.save()
    .then(repsuesta=>{
        res.json({
            message: "User added succesfully"
        })
    })
    .catch(error =>{
        res.json({
            message: "Error adding user"
        })
    })
}

//update user's data
// const updateUser = (req: { body: { userId: any; name: any; surname: any; username: any; password: any; email: any; }; }, res: any, next: any)=>{
//     let userId = req.body.userId;
//     let updateUserData = {
//         name: req.body.name,
//         surname: req.body.surname,
//         username: req.body.username,
//         password: req.body.password,
//         email: req.body.email
//     }

//     UserNuevo.findByIdAndUpdate(userId, {$set: updateUserData})
//     .then(repsuesta=>{
//         res.json({
//             message: "User updated succesfully"
//         })
//     })
//     .catch(error =>{
//         res.json({
//             message: "Error updating user"
//         })
//     })
// }

//delete a user

const deleteUser = (req: { body: { userId: any; }; }, res: { json: (arg0: { message: string; }) => void; }, next: any) =>{
    let userId = req.body.userId;

    UserNuevo.findByIdAndDelete(userId)
    .then(respuesta=>{
        res.json({
            message: "User deleted succesfully"
        })
    })
    .catch(error =>{
        res.json({
            message: "Error deleting user"
        })
    })
}


module.exports = {
    usersIndex, addUserToDB, updateUser, deleteUser, getOneUser, deleteOneUser, postUser
}