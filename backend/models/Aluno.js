const mongoose = require('mongoose');

const alunoSchema = new mongoose.Shema({
    name: {
        type: String,
        required: true
    },

    cpf: {
        type:Number,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    timestampas: true
})

const Aluno = mongoose.model('Aluno', alunoSchema)

module.exports = Aluno








