document.addEventListener("DOMContentLoaded", function () {
    // 1. Cargar la barra de navegación de forma dinámica
    const navbarContainer = document.getElementById("main-navbar");
    if (navbarContainer) {
        fetch("navbar.html")
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar la barra de navegación");
                return response.text();
            })
            .then(data => {
                navbarContainer.innerHTML = data;
            })
            .catch(error => console.error(error));
    }

    // 2. Cargar el pie de página (Footer) de forma dinámica
    const footerContainer = document.getElementById("main-footer");
    if (footerContainer) {
        fetch("footer.html")
            .then(response => {
                if (!response.ok) throw new Error("Error al cargar el footer");
                return response.text();
            })
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error(error));
    }

    // 3. Sección de noticias dinámicas (Cartelera rotativa)
    const noticiaTitulo = document.getElementById("noticia-titulo");
    const noticiaContenido = document.getElementById("noticia-contenido");
    const noticiaImagenContainer = document.getElementById("noticia-imagen-container");
    const noticiaImagen = document.getElementById("noticia-imagen");
    const noticiaEnlace = document.getElementById("noticia-enlace");

    if (noticiaTitulo) {
        let noticias = [];
        let indiceActual = 0;

        // Carga de datos del archivo JSON
        fetch("noticias.json")
            .then(response => {
                // CORRECCIÓN LOCAL: Permite procesar el archivo si se abre desde el disco duro (status 0) o desde un servidor (ok)
                if (!response.ok && response.status !== 0) {
                    throw new Error("No se pudo cargar el archivo de noticias.");
                }
                return response.json();
            })
            .then(data => {
                noticias = data;
                if (noticias.length > 0) {
                    mostrarNoticia(indiceActual);
                    // Iniciar la rotación automática cada 5000 milisegundos (5 segundos)
                    setInterval(rotarNoticia, 5000);
                } else {
                    noticiaTitulo.textContent = "No hay noticias en la cartelera en este momento.";
                }
            })
            .catch(error => {
                console.error(error);
                noticiaTitulo.textContent = "Cartelera de novedades temporariamente no disponible.";
            });

        // Función para renderizar la noticia actual en el HTML
        function mostrarNoticia(index) {
            const item = noticias[index];
            
            noticiaTitulo.textContent = item.titulo;
            noticiaContenido.textContent = item.contenido;

            // Validar si la noticia incluye imagen
            if (item.imagen && item.imagen.trim() !== "") {
                noticiaImagen.src = item.imagen;
                noticiaImagenContainer.style.display = "block";
            } else {
                noticiaImagenContainer.style.display = "none";
                noticiaImagen.src = "";
            }

            // Validar si la noticia incluye enlace de redirección
            if (item.enlace && item.enlace.trim() !== "") {
                noticiaEnlace.href = item.enlace;
                noticiaEnlace.style.display = "inline-block";
            } else {
                noticiaEnlace.style.display = "none";
                noticiaEnlace.href = "#";
            }
        }

        // Función que calcula el siguiente índice para avanzar en el carrusel
        function rotarNoticia() {
            indiceActual = (indiceActual + 1) % noticias.length;
            mostrarNoticia(indiceActual);
        }
    }
});