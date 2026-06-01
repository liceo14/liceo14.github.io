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
});