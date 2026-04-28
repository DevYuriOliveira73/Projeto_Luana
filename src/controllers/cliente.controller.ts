//createCliente, getClientes, getClienteById, updateCliente e deleteCliente.

import {Cliente, ClienteType} from "../models/cliente.model.js"
import {Request, Response} from 'express'

const createCliente = async (req: Request, res: Response) => {
  try {
    const {nome_completo,cpf,email,telefone,endereco} = req.body as ClienteType;

    if (!nome_completo || !cpf || !telefone) {
      return res.status(400).json({
        message: "Nome completo, CPF e telefone são campos obrigatórios"
      })
    }

    const regex_cpf = /^\d{11}$/;
    if (!regex_cpf.test(cpf)) {
      return res.status(400).json({
        message: "CPF inválido. Informe exatamente 11 dígitos numéricos, sem pontos ou traços."
      })
    }

    const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !regex_email.test(email)) {
      return res.status(400).json({
        message: "E-mail inválido. Informe um endereço de e-mail válido."
      });
    }

    //VAI FALTAR IMPLEMENTAR A PARTE DE ENDEREÇO


    const new_client = await Cliente.create({
      nome_completo,cpf,email,telefone,endereco
    })

    console.log(`Cliente [${new_client.nome_completo.toUpperCase()}] criado.`)

    res.status(201).json({
      message: "Cliente criado com sucesso.",
      cliente: new_client
    })

  } catch (error) {
  console.error("Erro ao criar cliente:", error);

    return res.status(500).json({
      message: "Erro interno no servidor."
    });
  }
}

const getClientes = async (req: Request, res: Response) => {
  
}

const getClienteById = async (req: Request, res: Response) => {
  
}

const updateCliente = async (req: Request, res: Response) => {
  
}

const deleteCliente = async (req: Request, res: Response) => {
  
}


export {
  createCliente,
  // getClientes,
  // getClienteById,
  // updateCliente,
  // deleteCliente
}