import mongoose from 'mongoose';

const { Schema } = mongoose;

const pacienteSchema =  new Schema({
  appointmentId: {
    type: String,
    required: [true, 'appointmentid obrigatório']
  },
  namepaciente : {
    type: String,
    required: [true, 'nome do paciente obrigatório'],
    },
    cpf : {
      type: String,
    required: [true, 'cpf do paciente obrigatório'],
  },
 telefone : {
      type: String,
    required: [true, 'telefone do paciente obrigatório'],
  },
email : {
      type: String,
    required: [true, 'email do paciente obrigatório'],
  },
   DataNascimento : {
      type: String,
    required: [true, 'data de nascimento do paciente obrigatório'],
    }
});
export default mongoose.model('PACIENTE', pacienteSchema);