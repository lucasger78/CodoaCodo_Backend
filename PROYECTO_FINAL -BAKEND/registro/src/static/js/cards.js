// Datos de las tarjetas
const datos = [
    {
        imagen: "cards/card01.jpg",
        titulo: "Petg",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    },
    {
        imagen: "cards/card02.jpg",
        titulo: "Abs",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    },
    {
        imagen: "cards/card03.jpg",
        titulo: "Flexibles",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    },
    {
        imagen: "cards/card04.jpg",
        titulo: "Pla",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    },
    {
        imagen: "cards/card05.jpg",
        titulo: "Pcabs",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    },
    {
        imagen: "cards/card06.jpg",
        titulo: "Nylon",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    },
    {
        imagen: "cards/card07.jpg",
        titulo: "Petg",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    },
    {
        imagen: "cards/card08.jpg",
        titulo: "Abs",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    },
    {
        imagen: "cards/card09.jpg",
        titulo: "Flexibles",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    },
    {
        imagen: "cards/card10.jpg",
        titulo: "Pla",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    },
    {
        imagen: "cards/card11.jpg",
        titulo: "Pcabs",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    },
    {
        imagen: "cards/card12.jpg",
        titulo: "Nylon",
        habilidades: [
            "Agilidad 80%",
            "Inteligencia 90%",
            "Fuerza 85%",
            "Percepción 75%"
        ]
    }
];

// Función para generar las tarjetas desde el DOM
// function generarCartas() {
//     const materialesGallery = document.getElementById("materiales-gallery");

//     // Crear la primera fila
//     const firstRow = document.createElement("div");
//     firstRow.classList.add("row");
//     materialesGallery.appendChild(firstRow);

//     // Crear la segunda fila
//     const secondRow = document.createElement("div");
//     secondRow.classList.add("row");
//     materialesGallery.appendChild(secondRow);

//     // Iterar sobre los datos para generar las cartas
//     datos.forEach((item, index) => {
//         // Elegir en qué fila insertar la carta
//         const row = index < 6 ? firstRow : secondRow;

//         // Crear la estructura de la carta
//         const gallery = document.createElement("div");
//         gallery.classList.add("gallery");

//         const contentGallery = document.createElement("div");
//         contentGallery.classList.add("content-gallery");

//         const img = document.createElement("img");
//         img.classList.add("img-gallery");
//         img.src = item.imagen;
//         img.alt = "galeria-materiales";

//         const h4 = document.createElement("h4");
//         h4.classList.add("title-materials");
//         h4.textContent = item.titulo;

//         const habilidades = document.createElement("p");
//         habilidades.classList.add("párrafo-materials");

//         item.habilidades.forEach((habilidad) => {
//             const span = document.createElement("span");
//             span.classList.add("habilidad");
//             span.textContent = habilidad;
//             habilidades.appendChild(span);
//             habilidades.appendChild(document.createElement("br"));
//         });

//         const infoBtn = document.createElement("div");
//         infoBtn.classList.add("info-btn");

//         const button = document.createElement("button");
//         button.classList.add("btn", "btn-danger", "btn-info");
//         const link = document.createElement("a");
//         link.href = "usuario.html";
//         link.classList.add("action_btn");
//         link.textContent = "+ Info";
//         button.appendChild(link);

//         contentGallery.appendChild(img);
//         contentGallery.appendChild(h4);
//         contentGallery.appendChild(habilidades);
//         contentGallery.appendChild(infoBtn);
//         infoBtn.appendChild(button);
//         gallery.appendChild(contentGallery);

//         // Agregar la carta a la fila correspondiente
//         row.appendChild(gallery);
//     });
// }

// // Generar las cartas al cargar la página
// generarCartas();


