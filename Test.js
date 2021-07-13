const mongoose = require('mongoose')

//Database Connection
const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/whatever', {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
}

//Here We Create our First Schema

const studentSchema = new mongoose.Schema({
  firstname: String,
})

//Here We Create Our Model
const Student = mongoose.model('student', studentSchema)

connect()
  .then(async (connection) => {
    const student = await Student.create({ firstname: 'Sky' })
    console.log(student)
  })
  .catch((e) => console.error(e))
