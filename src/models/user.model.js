import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  secondLastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    cp: {
      type: String,
      required: true
    },
    asentamiento: {
      type: String,
      required: true
    },
    tipo_asentamiento: {
      type: String,
      required: true
    },
    municipio: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    ciudad: {
      type: String,
      required: false
    },
    pais: {
      type: String,
      required: true
    },
  }
});

export default mongoose.model('User', UserSchema);