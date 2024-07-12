document.addEventListener("DOMContentLoaded", function() {
  const datos = [
      {
          "imagen": "https://randomuser.me/api/portraits/women/34.jpg",
          "usuario": "Petg",
          "datos": [
              "e-mail: abs@example.com",
              "Fecha de Nacimiento: 1995/08/15",
              "Nacionalidad: Estados Unidos",
              "Mazo: 100"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/44.jpg",
          "usuario": "GamerX",
          "datos": [
              "e-mail: gamerx@example.com",
              "Fecha de Nacimiento: 1992/04/21",
              "Nacionalidad: Canadá",
              "Mazo: 75"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/3.jpg",
          "usuario": "ProGamer",
          "datos": [
              "e-mail: progamer@example.com",
              "Fecha de Nacimiento: 1993/10/15",
              "Nacionalidad: Estados Unidos",
              "Mazo: 90"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/women/4.jpg",
          "usuario": "CyberPlayer",
          "datos": [
              "e-mail: cyberplayer@example.com",
              "Fecha de Nacimiento: 1990/07/08",
              "Nacionalidad: Reino Unido",
              "Mazo: 85"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/25.jpg",
          "usuario": "GamingMaster",
          "datos": [
              "e-mail: gamingmaster@example.com",
              "Fecha de Nacimiento: 1988/12/03",
              "Nacionalidad: Australia",
              "Mazo: 100"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/6.jpg",
          "usuario": "Abs",
          "usuario": "SkillfulGamer",
          "datos": [
              "e-mail: skillfulgamer@example.com",
              "Fecha de Nacimiento: 1995/03/27",
              "Nacionalidad: Alemania",
              "Mazo: 80"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/women/27.jpg",
          "usuario": "GameAddict",
          "datos": [
              "e-mail: gameaddict@example.com",
              "Fecha de Nacimiento: 1991/05/12",
              "Nacionalidad: Francia",
              "Mazo: 95"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/women/8.jpg",
          "usuario": "GamingNinja",
          "datos": [
              "e-mail: gamingninja@example.com",
              "Fecha de Nacimiento: 1987/09/19",
              "Nacionalidad: Japón",
              "Mazo: 110"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/women/9.jpg",
          "usuario": "GamerProdigy",
          "datos": [
              "e-mail: gamerprodigy@example.com",
              "Fecha de Nacimiento: 1994/02/28",
              "Nacionalidad: Corea del Sur",
              "Mazo: 120"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/50.jpg",
          "usuario": "LegendaryGamer",
          "datos": [
              "e-mail: legendarygamer@example.com",
              "Fecha de Nacimiento: 1989/06/15",
              "Nacionalidad: México",
              "Mazo: 105"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/39.jpg",
          "usuario": "ElitePlayer",
          "datos": [
          "e-mail: eliteplayer@example.com",
                  "Fecha de Nacimiento: 1996/11/23",
                  "Nacionalidad: Brasil",
                  "Mazo: 115"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/12.jpg",
          "usuario": "GameChampion",
          "datos": [
              "e-mail: gamechampion@example.com",
              "Fecha de Nacimiento: 1992/08/30",
              "Nacionalidad: España",
              "Mazo: 100"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/33.jpg",
          "usuario": "ProGamerX",
          "datos": [
              "e-mail: progamerx@example.com",
              "Fecha de Nacimiento: 1993/04/17",
              "Nacionalidad: Italia",
              "Mazo: 95"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/women/14.jpg",
          "usuario": "CyberMaster",
          "datos": [
              "e-mail: cybermaster@example.com",
              "Fecha de Nacimiento: 1997/11/08",
              "Nacionalidad: Portugal",
              "Mazo: 80"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/40.jpg",
          "usuario": "GamingLegend",
          "datos": [
              "e-mail: gaminglegend@example.com",
              "Fecha de Nacimiento: 1986/03/25",
              "Nacionalidad: Argentina",
              "Mazo: 110"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/women/26.jpg",
          "usuario": "SkillfulPlayer",
          "datos": [
              "e-mail: skillfulplayer@example.com",
              "Fecha de Nacimiento: 1990/09/12",
              "Nacionalidad: Chile",
              "Mazo: 105"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/17.jpg",
          "usuario": "GameAddictX",
          "datos": [
              "e-mail: gameaddictx@example.com",
              "Fecha de Nacimiento: 1995/01/29",
              "Nacionalidad: Perú",
              "Mazo: 100"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/18.jpg",
          "usuario":"GamingNinjaX",
          "datos": [
              "e-mail: gamingninjax@example.com",
              "Fecha de Nacimiento: 1988/07/04",
              "Nacionalidad: Colombia",
              "Mazo: 90"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/19.jpg",
          "usuario": "GamerProdigyX",
          "datos": [
              "e-mail: gamerprodigyx@example.com",
              "Fecha de Nacimiento: 1994/11/21",
              "Nacionalidad: Venezuela",
              "Mazo: 95"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/20.jpg",
          "usuario": "LegendaryGamerX",
          "datos": [
              "e-mail: legendgamerx@example.com",
              "Fecha de Nacimiento: 1987/05/18",
              "Nacionalidad: Ecuador",
              "Mazo: 105"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/21.jpg",
          "usuario": "ElitePlayerX",
          "datos": [
              "e-mail: eliteplayerx@example.com",
              "Fecha de Nacimiento: 1996/08/07",
              "Nacionalidad: Bolivia",
              "Mazo: 110"
          ]
      },
      {
          "imagen": "https://randomuser.me/api/portraits/men/22.jpg",
          "usuario": "GameChampionX",
          "datos": [
              "e-mail: gamechampionx@example.com",
              "Fecha de Nacimiento: 1992/12/03",
              "Nacionalidad: Uruguay",
              "Mazo: 120"
          ]
      }

      // Agrega más objetos JSON según necesites
  ];

  function generarTarjetas() {
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
          h4.textContent = item.usuario;

          const p = document.createElement("p");
          p.classList.add("párrafo-materials", "p-slide");
          item.datos.forEach((habilidad) => {
              const span = document.createElement("span");
              span.classList.add("habilidad", "habilidad-slide");
              span.textContent = habilidad;
              p.appendChild(span);
              p.appendChild(document.createElement("br"));
          });

          const divInfoBtn = document.createElement("div");
          divInfoBtn.classList.add("info-btn", "btn-slide");

          const button = document.createElement("button");
          button.classList.add("btn", "btn-danger", "btn-info");
          button.innerHTML = '<a href="usuario.html" class="action_btn">+ Info</a>';
          //button.innerHTML = '<a href="{{ url_for('usuario') }}" class="action_btn">+ Info</a>'

          document.addEventListener('DOMContentLoaded', function() {
            const cardContainer = document.getElementById('swiper-wrapper');
            const usuarioUrl = cardContainer.getAttribute('data-usuario-url');
            
            const button = document.createElement('button');
            button.className = 'action_btn';
            button.innerHTML = `<a href="${usuarioUrl}" class="action_btn">+ Info</a>`;
            
            cardContainer.appendChild(button);
        });

          divContentGallery.appendChild(img);
          divContentGallery.appendChild(h4);
          divContentGallery.appendChild(p);
          divContentGallery.appendChild(divInfoBtn);
          divInfoBtn.appendChild(button);
          divGallery.appendChild(divContentGallery);
          divSlide.appendChild(divGallery);
          swiperWrapper.appendChild(divSlide);
      });
  }

  // Inicializar Swiper después de generar las tarjetas
  generarTarjetas();
  new Swiper(".swiper-container", {
      slidesPerView: 5,
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
});
