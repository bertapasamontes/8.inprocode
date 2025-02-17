import { Router } from "express";
import { deleteOneUser, getOneUser, getUsers, postUser, showUser, updateUser, usersIndex } from "../controllers/userController"; 

const router = Router();

router.get('/', usersIndex); // cuando mi ruta sea "localhost:puerto/api/users" quiero que haga un get a mi api y use la funcion getUser

router.get('/:id', getOneUser);
router.delete('/:id', deleteOneUser);
router.post('/', postUser);
router.put('/:id', updateUser);

export default router;