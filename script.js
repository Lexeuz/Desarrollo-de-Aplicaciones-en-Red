function mostrarContenidos() {
    var url = document.getElementById("url").value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            // Actualizar el estado de la petición
            document.getElementById("estado").textContent = "Estado: " + xhr.statusText;
            // Mostrar las cabeceras HTTP
            var cabeceras = xhr.getAllResponseHeaders();
            document.getElementById("cabeceras").textContent = cabeceras;
            // Mostrar el código y texto de estado
            document.getElementById("codigoEstado").textContent = "Código: " + xhr.status + " " + xhr.statusText;
            // Mostrar el contenido de la respuesta
            document.getElementById("contenidos").textContent = xhr.responseText;
        } else {
            // Actualizar el estado de la petición
            document.getElementById("estado").textContent = "Estado: " + xhr.statusText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
