import {Router} from 'express';
import {createCliente,getClientes, getClienteById, deleteCliente, updateCliente} from "../controllers/cliente.controller.js"


const router = Router()


router.route("/cliente")
  .post( createCliente )
  .get( getClientes )

router.route("/cliente/:id")
  .get( getClienteById )
  .delete( deleteCliente )
  .patch( updateCliente )

export default router