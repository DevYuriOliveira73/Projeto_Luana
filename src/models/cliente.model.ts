import mongoose, { Schema, InferSchemaType } from "mongoose"

const clienteSchema = new Schema(
  {
    nome_completo: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    cpf: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^\d{11}$/,
    },
    telefone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
    },
    email: {
      type: String,
      //required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    endereco: {
      rua: {
        type: String,
        //required: true,
        trim: true,
      },
      numero: {
        type: String,
        //required: true,
        trim: true,
      },
      bairro: {
        type: String,
        //required: true,
        trim: true,
      },
      cidade: {
        type: String,
        //required: true,
        trim: true,
      },
      estado: {
        type: String,
        //required: true,
        trim: true,
      },
      cep: {
        type: String,
        //required: true,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
)

export type ClienteType = InferSchemaType<typeof clienteSchema>

export const Cliente = mongoose.model("Cliente", clienteSchema)