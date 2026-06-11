// novedades.js - Cartelera de novedades del Liceo 14
const NOVEDADES = [
    {
        titulo: "Organización de las actividades formativas y de esparcimiento",
        fecha: "11 de junio, 2026",
        contenido: "",
        imagen: "https://lh3.googleusercontent.com/d/1B_hwpBlpQK_fIKPhFSRdheJ12twSicXb",
        enlace: ""
    }
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
