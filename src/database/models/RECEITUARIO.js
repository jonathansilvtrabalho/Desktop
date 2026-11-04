import mongoose from 'mongoose';

const { Schema } = mongoose;

import mongoose from 'mongoose';

const { Schema } = mongoose;

const ReceituarioSchema = new Schema({
  appointmentId: {
    type: String,
    required: [true, 'appointmentId obrigatório']
  },
  date: { 
    type: Date, 
    required: [true, 'Data do receituário obrigatória'], // Ajustado gênero e traduzido termo para o usuário
    default: Date.now 
  },
  dosagem: {
    type: String, 
    required: [true, 'Dosagem obrigatória']
  },
  nomeMedicamento: {
    type: String, 
    required: [true, 'Nome do medicamento obrigatório']
  },
  instructions: {
    type: String, 
    required: [true, 'Instruções de uso obrigatórias'] // Ajustado plural e gênero como foco é estudo de caso usei a IA para revisão  de pontos como previsto  no projeto de portifolio
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
});

export default mongoose.model('Receituario', ReceituarioSchema);
