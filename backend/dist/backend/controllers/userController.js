"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showUser = exports.usersIndex = exports.updateUser = exports.postUser = exports.deleteOneUser = exports.getOneUser = exports.getUsers = void 0;
const users_js_1 = __importDefault(require("../../src/app/model/users.js"));
//para usar estas funciones, hay que añadirlas al module.export
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    users_js_1.default.find()
        .then((respuesta) => {
        res.json(respuesta);
    })
        .catch((error) => {
        res.json({
            message: 'Ocurrió un error en la función GetUsers'
        });
    });
});
exports.getUsers = getUsers;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    //el codigo comentado solo va si se le pasa el objectkey. hay q arreglarlo.
    // Validar si el ID es un ObjectId válido
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     res.status(400).json({ mensaje: "ID no válido para MongoDB" });
    // }
    // const userSolitario = await UserNuevo.findById(id);
    // if(userSolitario){
    //     res.json(userSolitario);
    // } else{
    //     res.status(404).json({
    //         mensaje: 'No existe un user con el id ${id}'
    //     })
    // }
    res.json({
        mensaje: 'get a user',
        id,
        body
    });
});
exports.getOneUser = getOneUser;
const deleteOneUser = (req, res) => {
    res.json({
        mensaje: 'delete a user',
        id: req.params
    });
};
exports.deleteOneUser = deleteOneUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        mensaje: 'post a user',
        body
    });
    // const user = new UserNuevo(req.body);
    // user
    //     .save()
    //     .then((data)=> res.json(data))
    //     .catch((error)=> res.json({
    //         mensaje: error
    //     }))
};
exports.postUser = postUser;
const updateUser = (req, res) => {
    // const {body} = req;
    // const {id} = req.params;
    // res.json({
    //     mensaje: 'Update a user',
    //     id,
    //     body
    // })
    const user = new users_js_1.default(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({
        mensaje: error
    }));
};
exports.updateUser = updateUser;
//show list of users
const usersIndex = (req, res) => {
    users_js_1.default.find()
        .then((respuesta) => {
        res.json({
            respuesta
        });
    })
        .catch((error) => {
        res.json({
            message: 'Ocurrió un error en la función Index'
        });
    });
};
exports.usersIndex = usersIndex;
// show single user
const showUser = (req, res, next) => {
    let userId = req.params.id;
    users_js_1.default.findById(userId)
        .then(respuesta => {
        res.json({
            respuesta: "Aqui tu user",
            id: req.params.id
        });
    })
        .catch((error) => {
        res.json({
            message: 'Un error ocurrió en showUser()'
        });
    });
};
exports.showUser = showUser;
// add user into database
const addUserToDB = (req, res, next) => {
    let user = new users_js_1.default({
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    user.save()
        .then(repsuesta => {
        res.json({
            message: "User added succesfully"
        });
    })
        .catch(error => {
        res.json({
            message: "Error adding user"
        });
    });
};
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
const deleteUser = (req, res, next) => {
    let userId = req.body.userId;
    users_js_1.default.findByIdAndDelete(userId)
        .then(respuesta => {
        res.json({
            message: "User deleted succesfully"
        });
    })
        .catch(error => {
        res.json({
            message: "Error deleting user"
        });
    });
};
module.exports = {
    usersIndex: exports.usersIndex, addUserToDB, updateUser: exports.updateUser, deleteUser, getOneUser: exports.getOneUser, deleteOneUser: exports.deleteOneUser, postUser: exports.postUser, getUsers: exports.getUsers
};
