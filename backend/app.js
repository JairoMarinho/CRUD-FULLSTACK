const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const alunosRoute = require('./routes/alunos')

dotenv.config()

const app = express();

app.use(cors())

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

app.use('api/alunos', alunosRoute)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
