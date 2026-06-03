// novedades.js - Cartelera de novedades del Liceo 14
const NOVEDADES = [
    {
        titulo: "Acto 19 de junio",
        fecha: "01 de junio, 2026",
        contenido: "El acto comenzará a las 9:00 horas. Los jurantes deben presentarse a las 8:30 horas. ",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj0evWnjoJgc42hJN203MgAyDxp8soqBSQ6iNTt-uOEJfmQov0xcw9p7mY8tn7j5xN0UKRtLvbrZ6zbBScYWrdEKe1WHL3VinicHRubkvR5fcEfmTPTayWpEDIUTPHo_JTBBzlHgIA0ZcyQJRiu2r_FT3TjcEIcdlgdJmWBrYdpGBKjk5Uy5kl-e9vzik/w400-h200/portada19.jpg",
        enlace: ""
    },
    {
        titulo: "Café Literario",
        fecha: "25 de mayo, 2026",
        contenido: "",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGeG82hdGknv2A0ZRMaxVP0r2AlXMHTBzP2DRioPR55BYH4q9lrL3aKaRb-veJIUOkVlYSvHPu4fh7oF9xYj_5rmXqiTgEt4q1XmJkgAGSCN0-Zw8LyhU4_H-MvCwrLQErAkdN6oIEDA9WtqHxQ7nsOldmuUu4ClLO_KbExhBlTf3Gj9LbhdUkq4y7RGo/w283-h400/cafe.png",
        enlace: ""
    },
    {
        titulo: "Reparación Equipos ACRAB 2025",
        fecha: "06 de mayo, 2026",
        contenido: "Miércoles 13 de Mayo a partir de las 10:00 hrs.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dR9_3pjYqcBqNb6MbT04fmzWT4qvUdPh9g&s",
        enlace: ""
    },
    {
        titulo: "Calendario de reuniones mayo 2026",
        fecha: "27 de abril, 2026",
        contenido: "",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjv3lN8IuXqhNdP2rmtdMTJ56JTvyMkhLRKhJJeYvdbknIihmFD53NINJjOeMX85tRMfaLBHPl2lfhD16vncnemv-RrBPTjAymnzC5YeZsE1lF87WSxckYsN_AlZbwlmx7xwcQxRlvU7ycDegdwbXo1H3Wru-z4KoKxFaSpWtdPuT7NVuxmveX4eQ9mG-Y/w400-h283/RMayo2026-page-001.jpg",
        enlace: ""
    },
	{
        titulo: "Calendario de exámenes abril 2026",
        fecha: "14 de abril, 2026",
        contenido: "",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjosjE78YWpzoh4E8m6iLOCMvul899TOptxHPfZNVgZcX8BSGbCKFNLHewv7qgex0M3VT0yTXB3bzc-cRJbLaNT6o1UKZLePZYWMPJdnaEJVTrOBb5M8QYWA5OuNNJFDMx12WE4nNqbi8tIMPPH9RCzJrTImowv4BHfwccvyi_s7TzNVbXjvoJsx39hyUE/w400-h283/ExaAbril2026.jpg",
        enlace: ""
    },
    {
        titulo: "Recambio de equipos CEIBAL",
        fecha: "07 de abril, 2026",
        contenido: "¿Cuándo? Jueves 16 de abril - 10 a 13 horas. ¿Dónde? Liceo 14 - Aula 4 (Videoconferencia en Casona)",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEga9SA2aIZiAPOZCPF40inPk0qw_o57fUEDXTBdtX9AaQmnbgbNkIrEJWi36j-q5BsXq35TicUvLGI2UZWTGJo5DerUWUa2QSmHAOL9WCzFyhgTGTfiohIbsqMUx5OuOdqYlwbOShkr5oOMWHPnS_0N5FBsDRnSZ5E7EU82mexbAe7pbMD8p3Iev2QIJ04/w283-h400/Invitacio%CC%81n%20para%20el%20d%C3%ADa%20de%20recambio.jpg",
        enlace: "https://beneficio.ceibal.edu.uy/consulta"
    },
    {
        titulo: "Calendario de Reuniones Abril 2026",
        fecha: "24 de marzo, 2026",
        contenido: "",
        imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiT7PwMUwrRtq6FSifJF1hI_v6mdIsdUPBD12UR-g7PWyumRyU1gKn3X9txVzjQl20ENdXj7A7L9XpjscuwuIrRwwjcRvwHTggoq8wkyfH45_Nkj9Yn4QvKnpLAKydRSvnH77_XeV6kM6vALkOLVWS7U-BMcYuLTrA4U50y6c2DCO33IO9nSke6mAylLPg/w400-h283/Calendario%20ABR2026.jpg",
        enlace: ""
    },
    {
        titulo: "Calendario ANEP 2026",
        fecha: "2 de marzo, 2026",
        contenido: "",
        imagen: "https://www.anep.edu.uy/sites/default/files/images/2025/noticias/diciembre/251211/calendario-2026/Calendario%20ANEP%2020262.jpg",
        enlace: ""
    },
 ];

// Función para renderizar las novedades de forma dinámica
function cargarCarteleraNovedades() {
    const contenedor = document.getElementById("cartelera-dinamica");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    NOVEDADES.forEach(novedad => {
        const article = document.createElement("article");
        article.className = "post";

        let estructuraHtml = `
            <h3><i class="fa-solid fa-newspaper"></i> ${novedad.titulo}</h3>
            <p><small class="highlight-line"><i class="fa-regular fa-calendar"></i> ${novedad.fecha}</small></p>
            <br>
        `;

        if (novedad.imagen) {
            estructuraHtml += `
                <div class="post-content">
                    <div class="post-text">
                        <p>${novedad.contenido}</p>
                    </div>
                    <a href="${novedad.imagen}" target="_blank">
                        <img src="${novedad.imagen}" alt="Imagen de ${novedad.titulo}">
                    </a>
                </div>
            `;
        } else {
            estructuraHtml += `<p>${novedad.contenido}</p>`;
        }

        if (novedad.enlace) {
            estructuraHtml += `
                <br>
                <a href="${novedad.enlace}" class="btn-comment" ${novedad.enlace.startsWith('http') ? 'target="_blank"' : ''}> Leer más</a>
            `;
        }

        article.innerHTML = estructuraHtml;
        contenedor.appendChild(article);
    });
}

document.addEventListener("DOMContentLoaded", cargarCarteleraNovedades);