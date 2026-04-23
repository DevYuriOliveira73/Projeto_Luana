import {Router} from 'express';
import {createPeca, listPeca, getPeca, deletePeca} from "../controllers/peca.controller.js"


const router = Router()


router.route("/peca")
  .post( createPeca )
  .get( listPeca )

router.route("/peca/:id")
  .get( getPeca )
  .delete( deletePeca )

export default router