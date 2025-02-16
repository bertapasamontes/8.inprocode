import usuario from '../model/users.js';

//show list of users
const usersIndex = (req: any, res: { json: (arg0: { respuesta?: any; message?: string; }) => void; }, next: any) =>{
    usuario.find()
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
const showUser  = (req: any, res: any, next: any) =>{
    let userId = req.body.userId;
    usuario.findById(userId)
    .then(respuesta =>{
        res.json({
            respuesta
        })
    })
    .catch(error=>{
        res.json({
            message: 'Un error ocurrió en showUser()'
        })
    })
}

// add user into database
const addUserToDB = (req: { body: { name: any; surname: any; username: any; password: any; email: any;}; }, res: any, next: any) => {
    let user = new usuario({
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
const updateUser = (req: { body: { userId: any; name: any; surname: any; username: any; password: any; email: any; }; }, res: any, next: any)=>{
    let userId = req.body.userId;
    let updateUserData = {
        name: req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }

    usuario.findByIdAndUpdate(userId, {$set: updateUserData})
    .then(repsuesta=>{
        res.json({
            message: "User updated succesfully"
        })
    })
    .catch(error =>{
        res.json({
            message: "Error updating user"
        })
    })
}

//delete a user

const deleteUser = (req: { body: { userId: any; }; }, res: { json: (arg0: { message: string; }) => void; }, next: any) =>{
    let userId = req.body.userId;

    usuario.findByIdAndDelete(userId)
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
    usersIndex, addUserToDB, updateUser, deleteUser
}