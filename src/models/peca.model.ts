import mongoose, { Schema } from "mongoose";

const categoriasPeca = [
  "boleira",
  "vaso",
  "mesinha",
  "bandeja",
  "painel",
  "outro",
] as const;

const pecaSchema = new Schema(
  {
    nome_peca: {
      type: String,
      required: true,
      trim: true,
      maxlength: 32,
    },
    categoria: {
      type: String,
      enum: categoriasPeca,
    },
    descricao: {
      type: String,
      trim: true,
      maxlength: 255,
    },
    image: {
      type: String,
      trim: true,
    },
    is_disponivel: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Peca = mongoose.model("Peca_decorativa", pecaSchema);