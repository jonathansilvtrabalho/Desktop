import mongoose from 'mongoose';

const { Schema } = mongoose;

const ReceituarioSchema = new Schema({
  appointmentId: {
    type: String,
    required: [true, 'appointmentid obrigatório']
  },
  date: { 
    type: Date, 
    required: [true, 'date da receita obrigatório'], 
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
    required: [true, 'instructions de uso obrigatório']
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
});

export default mongoose.model('Receituario', ReceituarioSchema);