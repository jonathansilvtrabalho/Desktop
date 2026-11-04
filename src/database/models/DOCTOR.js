import mongoose from 'mongoose';
import { isValidElement } from 'react';

const { Schema } = mongoose;

const doctorSchema = new Schema({
  appointmentId: {
    type: String,
    required: [true, 'appointmentid obrigatório']
  },
  doctorNome: { 
    type: String, 
    required: [true, 'nome da doctor obrigatório']
  },
  CRM: {
    type: String,
    required: [true, 'crm da doctor obrigatório']
  },
  nascimento: {
    type: String, 
    required: [true, 'nascimento da doctor obrigatório']
  },
  telefone: {
    type: String, 
    required: [true, 'telefone da doctor obrigatório'],
    validate: { 
      validator: function(valor) {
        return /\(\d{2}\) \d{5}-\d{4}/.test(valor);
      },
      message: 'Telefone inválido'
    }
  }, 
  especialidade: {
    type: String, 
    required: [true, 'especialidade da doctor obrigatório']
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
});


export default mongoose.model('DOCTOR', doctorSchema);
