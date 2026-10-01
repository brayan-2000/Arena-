import './style.css'

document.querySelector('#app').innerHTML = `

<header class="navbar">

    <div class="logo">
        ⚽ Arena Fútbol
    </div>

    <nav>
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#galeria">Galería</a>
        <a href="#horarios">Horarios</a>
        <a href="#promociones">Promociones</a>
    </nav>

</header>


<main>

    <!-- HERO -->

    <section class="hero" id="inicio">

        <div class="hero-contenido">

            <p class="etiqueta">
                TU CANCHA, TU PARTIDO
            </p>

            <h1>
                Reserva tu cancha
                <span>de fútbol</span>
            </h1>

            <p>
                Consulta horarios, precios y disponibilidad
                de manera rápida y sencilla.
            </p>

            <div class="botones">

                <a href="#horarios" class="btn-principal">
                    Ver disponibilidad
                </a>

                <a href="#servicios" class="btn-secundario">
                    Ver servicios
                </a>

            </div>

        </div>

    </section>


    <!-- INFORMACIÓN DESTACADA -->

    <section class="informacion">

        <div class="info-card">

            <div class="icono-info">
                ⚽
            </div>

            <h3>
                Cancha moderna
            </h3>

            <p>
                Instalaciones preparadas para disfrutar
                partidos con amigos y campeonatos.
            </p>

        </div>


        <div class="info-card">

            <div class="icono-info">
                🕒
            </div>

            <h3>
                Amplios horarios
            </h3>

            <p>
                Consulta horarios disponibles
                y encuentra el momento ideal para jugar.
            </p>

        </div>


        <div class="info-card">

            <div class="icono-info">
                💰
            </div>

            <h3>
                Precios accesibles
            </h3>

            <p>
                Revisa nuestras tarifas
                y promociones disponibles.
            </p>

        </div>

    </section>


    <!-- SERVICIOS -->

    <section class="servicios" id="servicios">

        <div class="titulo-seccion">

            <p>
                NUESTROS SERVICIOS
            </p>

            <h2>
                Todo lo que necesitas para jugar
            </h2>

            <span>
                Servicios pensados para una mejor experiencia deportiva.
            </span>

        </div>


        <div class="contenedor-servicios">

            <div class="servicio-card">

                <div class="icono">
                    ⚽
                </div>

                <h3>
                    Alquiler de cancha
                </h3>

                <p>
                    Reserva nuestra cancha para jugar
                    con tus amigos.
                </p>

            </div>


            <div class="servicio-card">

                <div class="icono">
                    🏆
                </div>

                <h3>
                    Campeonatos
                </h3>

                <p>
                    Organizamos campeonatos
                    y eventos deportivos.
                </p>

            </div>


            <div class="servicio-card">

                <div class="icono">
                    💡
                </div>

                <h3>
                    Iluminación
                </h3>

                <p>
                    Cancha iluminada
                    para partidos nocturnos.
                </p>

            </div>


            <div class="servicio-card">

                <div class="icono">
                    🚗
                </div>

                <h3>
                    Estacionamiento
                </h3>

                <p>
                    Espacio disponible
                    para nuestros clientes.
                </p>

            </div>

        </div>

    </section>


    <!-- GALERÍA -->

    <section class="galeria" id="galeria">

        <div class="titulo-seccion">

            <p>
                NUESTRAS INSTALACIONES
            </p>

            <h2>
                Vive la experiencia Arena Fútbol
            </h2>

            <span>
                Espacios preparados para disfrutar cada partido.
            </span>

        </div>


        <div class="galeria-grid">

            <div class="galeria-item galeria-grande">

                <img
                    src="https://images.unsplash.com/photo-1459865264687-595d652de67e"
                    alt="Cancha de fútbol"
                >

                <div class="galeria-texto">
                    <h3>Cancha principal</h3>
                    <p>Espacio ideal para partidos y entrenamientos.</p>
                </div>

            </div>


            <div class="galeria-item">

                <img
                    src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e"
                    alt="Partido de fútbol"
                >

                <div class="galeria-texto">
                    <h3>Partidos</h3>
                    <p>Disfruta el fútbol con tus amigos.</p>
                </div>

            </div>


            <div class="galeria-item">

                <img
                    src="https://images.unsplash.com/photo-1517466787929-bc90951d0974"
                    alt="Estadio iluminado"
                >

                <div class="galeria-texto">
                    <h3>Iluminación nocturna</h3>
                    <p>Juega cómodamente durante la noche.</p>
                </div>

            </div>

        </div>

    </section>


    <!-- HORARIOS -->

    <section class="horarios" id="horarios">

        <div class="titulo-seccion">

            <p>
                DISPONIBILIDAD
            </p>

            <h2>
                Consulta nuestros horarios
            </h2>

            <span>
                Encuentra rápidamente una fecha y horario disponible.
            </span>

        </div>


        <div class="filtros">

            <div>

                <label for="filtroFecha">
                    Fecha
                </label>

                <input
                    type="date"
                    id="filtroFecha"
                >

            </div>


            <div>

                <label for="filtroEstado">
                    Estado
                </label>

                <select id="filtroEstado">

                    <option value="">
                        Todos
                    </option>

                    <option value="Disponible">
                        Disponible
                    </option>

                    <option value="Reservado">
                        Reservado
                    </option>

                </select>

            </div>


            <button id="btnBuscar">
                Buscar
            </button>


            <button id="btnLimpiar">
                Limpiar
            </button>

        </div>


        <div
            id="listaHorarios"
            class="lista-horarios"
        >

            <div class="mensaje">
                Cargando horarios...
            </div>

        </div>

    </section>


    <!-- PROMOCIÓN -->

    <section
        class="promocion"
        id="promociones"
    >

        <div>

            <p>
                PROMOCIÓN ESPECIAL
            </p>

            <h2>
                ¡Juega más, paga menos!
            </h2>

            <span>
                Consulta nuestros horarios y aprovecha
                las promociones disponibles.
            </span>

        </div>


        <a href="#horarios">
            Consultar horarios
        </a>

    </section>

</main>


<footer>

    <div>

        <h3>
            ⚽ Arena Fútbol
        </h3>

        <p>
            Tu lugar para disfrutar el fútbol.
        </p>

    </div>


    <div class="footer-links">

        <a href="#inicio">
            Inicio
        </a>

        <a href="#servicios">
            Servicios
        </a>

        <a href="#horarios">
            Horarios
        </a>

    </div>


    <p>
        © 2026 Arena Fútbol
    </p>

</footer>

`


// ========================================
// API
// ========================================

const API_URL = '/api/horarios'



const contenedorHorarios =
    document.querySelector('#listaHorarios')

const filtroFecha =
    document.querySelector('#filtroFecha')

const filtroEstado =
    document.querySelector('#filtroEstado')

const btnBuscar =
    document.querySelector('#btnBuscar')

const btnLimpiar =
    document.querySelector('#btnLimpiar')

let horariosOriginales = []


async function cargarHorarios() {

    contenedorHorarios.innerHTML = `

        <div class="mensaje">

            <div class="cargando"></div>

            <p>
                Cargando horarios...
            </p>

        </div>

    `

    try {

        const respuesta =
            await fetch(API_URL)

        if (!respuesta.ok) {

            throw new Error(
                'Error HTTP: ' + respuesta.status
            )

        }

        const datos =
            await respuesta.json()

        console.log(
            'Datos recibidos:',
            datos
        )


        if (Array.isArray(datos)) {

            horariosOriginales = datos

        } else if (
            datos.data &&
            Array.isArray(datos.data)
        ) {

            horariosOriginales = datos.data

        } else {

            horariosOriginales = []

        }


        mostrarHorarios(
            horariosOriginales
        )

    } catch (error) {

        console.error(
            'Error al consumir API:',
            error
        )

        contenedorHorarios.innerHTML = `

            <div class="mensaje error">

                <h3>
                    ⚠️ No se pudo cargar la información
                </h3>

                <p>
                    Verifica que la API esté funcionando.
                </p>

            </div>

        `

    }

}



// ========================================
// MOSTRAR HORARIOS
// ========================================

function mostrarHorarios(datos) {

    contenedorHorarios.innerHTML = ''

    if (
        !datos ||
        datos.length === 0
    ) {

        contenedorHorarios.innerHTML = `

            <div class="mensaje">

                <h3>
                    No existen datos
                </h3>

                <p>
                    No se encontraron horarios disponibles.
                </p>

            </div>

        `

        return
    }


    datos.forEach(horario => {

        const tarjeta =
            document.createElement('div')

        tarjeta.classList.add(
            'tarjeta-horario'
        )


        const fecha =
            horario.fecha ?? 'Sin fecha'

        const hora =
            horario.hora ?? 'Sin hora'

        const estado =
            horario.estado ?? 'Sin estado'

        const precio =
            horario.precio ?? '0'

        const tipo =
            horario.tipo ??
            horario.tipoCancha ??
            'Cancha de fútbol'

        const duracion =
            horario.duracion ??
            '60 minutos'


        let claseEstado = ''

        if (
            estado
                .toString()
                .toLowerCase()
                .includes('disponible')
        ) {

            claseEstado =
                'estado-disponible'

        } else {

            claseEstado =
                'estado-reservado'

        }


        tarjeta.innerHTML = `

            <div class="cabecera-tarjeta">

                <h3>
                    ⚽ ${tipo}
                </h3>

                <span class="${claseEstado}">
                    ${estado}
                </span>

            </div>


            <div class="datos-horario">

                <p>
                    📅
                    <strong>Fecha:</strong>
                    ${fecha}
                </p>

                <p>
                    🕐
                    <strong>Hora:</strong>
                    ${hora}
                </p>

                <p>
                    ⏱️
                    <strong>Duración:</strong>
                    ${duracion}
                </p>

                <p class="precio">
                    S/ ${precio}
                </p>

            </div>


            <button
                class="btn-detalle"
                data-id="${horario.id}"
            >
                Ver detalle
            </button>

        `


        contenedorHorarios
            .appendChild(tarjeta)


        const botonDetalle =
            tarjeta.querySelector(
                '.btn-detalle'
            )


        botonDetalle.addEventListener(
            'click',
            () => {

                mostrarDetalle(horario)

            }
        )

    })

}



// ========================================
// DETALLE
// ========================================

function mostrarDetalle(horario) {

    const ventanaDetalle =
        document.createElement('div')


    ventanaDetalle.classList.add(
        'modal-fondo'
    )


    ventanaDetalle.innerHTML = `

        <div class="modal">

            <button class="cerrar-modal">
                ×
            </button>


            <h2>
                ⚽ Detalle del horario
            </h2>


            <div class="detalle-contenido">

                <p>
                    <strong>ID:</strong>
                    ${horario.id}
                </p>

                <p>
                    <strong>Fecha:</strong>
                    ${horario.fecha}
                </p>

                <p>
                    <strong>Hora:</strong>
                    ${horario.hora}
                </p>

                <p>
                    <strong>Estado:</strong>
                    ${horario.estado}
                </p>

                <p>
                    <strong>Tipo de cancha:</strong>
                    ${horario.tipo}
                </p>

                <p>
                    <strong>Precio:</strong>
                    S/ ${horario.precio}
                </p>

                <p>
                    <strong>Duración:</strong>
                    ${horario.duracion}
                </p>

            </div>

        </div>

    `


    document.body.appendChild(
        ventanaDetalle
    )


    const botonCerrar =
        ventanaDetalle.querySelector(
            '.cerrar-modal'
        )


    botonCerrar.addEventListener(
        'click',
        () => {

            ventanaDetalle.remove()

        }
    )


    ventanaDetalle.addEventListener(
        'click',
        evento => {

            if (
                evento.target ===
                ventanaDetalle
            ) {

                ventanaDetalle.remove()

            }

        }
    )

}



// ========================================
// FILTROS
// ========================================

function filtrarHorarios() {

    const fechaSeleccionada =
        filtroFecha.value

    const estadoSeleccionado =
        filtroEstado.value


    const resultados =
        horariosOriginales.filter(
            horario => {

                const coincideFecha =

                    fechaSeleccionada === ''

                    ||

                    horario.fecha ===
                    fechaSeleccionada


                const coincideEstado =

                    estadoSeleccionado === ''

                    ||

                    horario.estado ===
                    estadoSeleccionado


                return (
                    coincideFecha &&
                    coincideEstado
                )

            }
        )


    mostrarHorarios(
        resultados
    )

}



// ========================================
// EVENTOS
// ========================================

btnBuscar.addEventListener(
    'click',
    filtrarHorarios
)


btnLimpiar.addEventListener(
    'click',
    () => {

        filtroFecha.value = ''

        filtroEstado.value = ''

        mostrarHorarios(
            horariosOriginales
        )

    }
)



// ========================================
// INICIO
// ========================================

cargarHorarios()
