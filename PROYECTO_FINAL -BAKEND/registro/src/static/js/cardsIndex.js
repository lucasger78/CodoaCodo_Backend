document.addEventListener("DOMContentLoaded", function() {
  const datos = [
    {
        "imagen": "{{ url_for('static', filename='cards/card01.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Zombie)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card02.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Ninja)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card03.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Ninja)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card04.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Ninja)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card05.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Ninja)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card06.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Mitológica)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card07.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Mitológica)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card08.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Mitológica)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card09.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Monstruo)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card10.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Monstruo)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card11.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Ninja)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card12.jpg') }}",
        "titulo": "Zork",
        "habilidades": [
            "Faccion: (Zombie)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card13.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Monstruo)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card14.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Zombie)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card15.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Monstruo)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card16.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Mitológica)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card17.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Monstruo)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card18.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Mitológica)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card19.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Monstruo)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    },
    {
        "imagen": "{{ url_for('static', filename='cards/card20.jpg') }}",
        "titulo": "Petg",
        "habilidades": [
            "Faccion: (Mitológica)",
            "Agilidad 80% (Velocidad y destreza física)",
            "Inteligencia 90% (Habilidad para resolver problemas)",
            "Fuerza 85% (Poder físico y capacidad de causar daño)",
            "Percepción 75% (Sensibilidad para anticipar peligros)"
        ]
    }
];
const swiperWrapper = document.getElementById("swiper-wrapper");

    datos.forEach((item) => {
        const divSlide = document.createElement("div");
        divSlide.classList.add("swiper-slide");

        const divGallery = document.createElement("div");
        divGallery.classList.add("gallery");

        const divContentGallery = document.createElement("div");
        divContentGallery.classList.add("content-gallery");

        const img = document.createElement("img");
        img.classList.add("img-gallery", "img-slide");
        img.src = item.imagen;
        img.alt = "galeria-materiales";

        const h4 = document.createElement("h4");
        h4.classList.add("title-materials", "title-slide");
        h4.textContent = item.titulo;

        const divHabilidades = document.createElement("div");
        divHabilidades.classList.add("habilidades", "texto-desktop");

        // Agregar estilo CSS para justificar el texto a la izquierda
        divHabilidades.style.textAlign = "left";
        divHabilidades.style.fontSize = "small";
        divHabilidades.style.fontFamily = "Montserrat, sans-serif";
        divHabilidades.style.textAlign = "initial";
        divHabilidades.style.margin = "10px";
        divHabilidades.style.paddingTop = "0 8px";

        item.habilidades.forEach((habilidad) => {
            const habilidadParts = habilidad.split("(");
            const habilidadName = habilidadParts[0].trim();
            const habilidadDesc = habilidadParts[1].replace(")", "").trim();

            const spanNombre = document.createElement("span");
            spanNombre.textContent = habilidadName;

            const spanDesc = document.createElement("span");
            spanDesc.textContent = `(${habilidadDesc})`;

            // Aplicar negrita solo al nombre de la habilidad
            spanNombre.style.fontWeight = "bold";

            divHabilidades.appendChild(spanNombre);
            divHabilidades.appendChild(spanDesc);
            divHabilidades.appendChild(document.createElement("br"));
        });

        const divInfoBtn = document.createElement("div");
        divInfoBtn.classList.add("info-btn", "btn-slide");

        const button = document.createElement("button");
        button.classList.add("btn", "btn-danger", "btn-info");
        button.innerHTML = '<a href="usuario.html" class="action_btn">+ Info</a>';

        divContentGallery.appendChild(img);
        divContentGallery.appendChild(h4);
        divContentGallery.appendChild(divHabilidades);
        divContentGallery.appendChild(divInfoBtn);
        divInfoBtn.appendChild(button);
        divGallery.appendChild(divContentGallery);
        divSlide.appendChild(divGallery);
        swiperWrapper.appendChild(divSlide);
    });

    // Inicializar Swiper después de generar las tarjetas
    new Swiper(".swiper-container", {
        slidesPerView: 5,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})
// GENERAR CARRUSEL

// function generarTarjetas() {
//     const swiperWrapper = document.getElementById("swiper-wrapper");

//     datos.forEach((item) => {
//         const divSlide = document.createElement("div");
//         divSlide.classList.add("swiper-slide");

//         const divGallery = document.createElement("div");
//         divGallery.classList.add("gallery");

//         const divContentGallery = document.createElement("div");
//         divContentGallery.classList.add("content-gallery");

//         const img = document.createElement("img");
//         img.classList.add("img-gallery", "img-slide");
//         img.src = item.imagen;
//         img.alt = "galeria-materiales";

//         const h4 = document.createElement("h4");
//         h4.classList.add("title-materials", "title-slide");
//         h4.textContent = item.titulo;

//         const divHabilidades = document.createElement("div");
//         divHabilidades.classList.add("habilidades", "texto-desktop");

//          // Agregar estilo CSS para justificar el texto a la izquierda
//          divHabilidades.style.textAlign = "left";
//          divHabilidades.style.fontSize = "small";
//          divHabilidades.style.fontfamily = "Montserrat, sans-serif";
//          divHabilidades.style.textalign = "initial";
//          divHabilidades.style.margin = "10px";
//          divHabilidades.style.paddingtop = "0 8px";

//         item.habilidades.forEach((habilidad) => {
//             const habilidadParts = habilidad.split("(");
//             const habilidadName = habilidadParts[0].trim();
//             const habilidadDesc = habilidadParts[1].replace(")", "").trim();

//             const spanNombre = document.createElement("span");
//             spanNombre.textContent = habilidadName;

//             const spanDesc = document.createElement("span");
//             spanDesc.textContent = `(${habilidadDesc})`;

//             // Aplicar negrita solo al nombre de la habilidad
//             spanNombre.style.fontWeight = "bold";

//             divHabilidades.appendChild(spanNombre);
//             divHabilidades.appendChild(spanDesc);
//             divHabilidades.appendChild(document.createElement("br"));
//         });

//         const divInfoBtn = document.createElement("div");
//         divInfoBtn.classList.add("info-btn", "btn-slide");

//         const button = document.createElement("button");
//         button.classList.add("btn", "btn-danger", "btn-info");
//         button.innerHTML = '<a href="usuario.html" class="action_btn">+ Info</a>';

//         divContentGallery.appendChild(img);
//         divContentGallery.appendChild(h4);
//         divContentGallery.appendChild(divHabilidades);
//         divContentGallery.appendChild(divInfoBtn);
//         divInfoBtn.appendChild(button);
//         divGallery.appendChild(divContentGallery);
//         divSlide.appendChild(divGallery);
//         swiperWrapper.appendChild(divSlide);
//     });
// }

// // Inicializar Swiper después de generar las tarjetas
// generarTarjetas();
// new Swiper(".swiper-container", {
//     slidesPerView: 5,
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
// });

// static/js/generateCards.js

