// Archivo JS correspondiente a la lógica de la barra de navegación

// FETCH hacia la API para obtener las categorías
function getCategories() {
    fetch(`${HOST}:${PORT}/api/categories/`)
        .then(response => {
            console.log(response.json())
        })
        .catch(error => console.error(error))
}