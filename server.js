import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())


// =====================================
// DATOS
// =====================================

const horarios = [
    {
        id: 1,
        fecha: "2026-10-01",
        hora: "08:00",
        estado: "Disponible",
        precio: 50,
        tipo: "Cancha sintética",
        duracion: "60 minutos"
    },
    {
        id: 2,
        fecha: "2026-10-01",
        hora: "10:00",
        estado: "Reservado",
        precio: 50,
        tipo: "Cancha sintética",
        duracion: "60 minutos"
    },
    {
        id: 3,
        fecha: "2026-10-01",
        hora: "14:00",
        estado: "Disponible",
        precio: 60,
        tipo: "Cancha sintética",
        duracion: "60 minutos"
    },
    {
        id: 4,
        fecha: "2026-10-02",
        hora: "16:00",
        estado: "Disponible",
        precio: 60,
        tipo: "Cancha sintética",
        duracion: "60 minutos"
    }
]


const servicios = [
    {
        id: 1,
        nombre: "Alquiler de cancha",
        descripcion: "Reserva de cancha sintética."
    },
    {
        id: 2,
        nombre: "Campeonatos",
        descripcion: "Organización de campeonatos deportivos."
    },
    {
        id: 3,
        nombre: "Iluminación",
        descripcion: "Iluminación para partidos nocturnos."
    },
    {
        id: 4,
        nombre: "Estacionamiento",
        descripcion: "Espacio disponible para clientes."
    }
]


const promociones = [
    {
        id: 1,
        titulo: "Juega más, paga menos",
        descripcion: "Promoción especial para clientes frecuentes."
    }
]


// =====================================
// API PRINCIPAL
// =====================================

app.get('/api', (req, res) => {

    res.json({
        mensaje: "API Arena Fútbol funcionando correctamente",
        endpoints: {
            horarios: "/api/horarios",
            servicios: "/api/servicios",
            promociones: "/api/promociones"
        }
    })

})


// =====================================
// HORARIOS
// =====================================

app.get('/api/horarios', (req, res) => {

    res.json(horarios)

})


app.get('/api/horarios/:id', (req, res) => {

    const id = Number(req.params.id)

    const horario = horarios.find(
        item => item.id === id
    )

    if (!horario) {

        return res.status(404).json({
            mensaje: "Horario no encontrado"
        })

    }

    res.json(horario)

})


// =====================================
// SERVICIOS
// =====================================

app.get('/api/servicios', (req, res) => {

    res.json(servicios)

})


// =====================================
// PROMOCIONES
// =====================================

app.get('/api/promociones', (req, res) => {

    res.json(promociones)

})


// =====================================
// RUTA PRINCIPAL
// =====================================

app.get('/', (req, res) => {

    res.json({
        mensaje: "Bienvenido a Arena Fútbol",
        api: "/api"
    })

})


// =====================================
// RUTA NO ENCONTRADA
// =====================================

app.use((req, res) => {

    res.status(404).json({
        mensaje: "Ruta no encontrada"
    })

})


// =====================================
// SERVIDOR
// =====================================

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {

    console.log("======================================")
    console.log("API NUEVA DE ARENA FÚTBOL")
    console.log(`http://localhost:${PORT}/api`)
    console.log("======================================")

})