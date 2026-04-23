import {Peca, PecaType, categoriasPeca} from '../models/peca.model.js'
import {Request, Response} from 'express'

const createPeca = async (req: Request, res: Response) => {
  try {
    const {nome_peca, categoria, descricao} = req.body as PecaType

    if(!nome_peca){
      return res.status(400).json({
        message: "The name of the part is required."
      })
    }

    //COLOCAR VALIDAÇÃO
    if(categoria && !categoriasPeca.includes(categoria)){
      res.status(400).json({
        message: "Invalid Category"
      })
    }

    const new_peca = await Peca.create({
      nome_peca, 
      categoria, 
      descricao
    })

    console.log(`Peça created: ${new_peca.nome_peca} - ${new_peca.categoria}`)

    res.status(201).json({
      message: "Peça created",
      peca: { new_peca }
    })


  } catch (error : any) {
    res.status(500)
      .json({message: "Internal server error", error: error.message})
  }
}

const listPeca = async (req: Request, res: Response) => {
  try {
    const pecas = await Peca.find()

    res.status(200).json({
      ...pecas
    })

  } catch (error: any) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

const getPeca = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const peca = await Peca.findById(id)

    res.status(200).json({
      peca
    })

  } catch (error: any) {
    res.status(500).json({
      message: "Internal Server Error"
    })
  }
}

const deletePeca = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const deleted = await Peca.findByIdAndDelete(id)

    if (!deleted) {
      return res.status(404).json({ message: "Peça not found" })
    }

    return res.status(200).json({
      message: "Peça successfully deleted",
      deleted
    })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error in delete",
      error
    })
  }
}

export {
  createPeca,
  listPeca,
  getPeca,
  deletePeca
}