import {Router} from 'express';
import {createCliente} from "../controllers/cliente.controller.js"


const router = Router()


router.route("/cliente")
  .post( createCliente )
  // .get( listPeca )

// router.route("/peca/:id")
//   .get( getPeca )
//   .delete( deletePeca )

export default router