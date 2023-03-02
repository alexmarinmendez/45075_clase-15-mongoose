import mongoose from 'mongoose'

const estudiantes = [
    { nombre: 'Pedro', apellido: 'Mei', edad: 21 },
    { nombre: 'Maria', apellido: 'Rojas', edad: 21 },
    { nombre: 'Julio', apellido: 'Verne', edad: 21 },
    { nombre: 'Pepito', apellido: 'Rodriguez', edad: 21 },
    { nombre: 'Julito', apellido: 'Mercado', edad: 21 },
    { nombre: 'Emilio', apellido: 'Rubio', edad: 21 },
    { nombre: 'Ariela', apellido: 'Markarz', edad: 21 },
    { nombre: 'Alex', edad: 21 },
    { nombre: 'Emanuel', apellido: 'Cargnino', edad: 21 },
    { nombre: 'Evelin', apellido: 'Copaijira', edad: 21 },
]

const estudiantesSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    apellido: { type: String, require: true },
    edad: { type: Number, require: true },
})

const EstudiantesDAO = mongoose.model('estudiantes', estudiantesSchema)

await mongoose.connect('mongodb+srv://coder:coder@cluster0.ef7umxt.mongodb.net/colegio?retryWrites=true&w=majority', {
    serverSelectionTimeoutMS: 5000,
})
console.log('Base de datos conectada....')

// for (const estudiante of estudiantes) {
//     await EstudiantesDAO.create(estudiante)
// }

await EstudiantesDAO.insertMany(estudiantes)
console.log('Datos insertados....')