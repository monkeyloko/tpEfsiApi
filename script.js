

let divPelis = document.getElementById("divPelis");
document.getElementById("formPeliculas").addEventListener("submit", enviarForm);
function enviarForm(evento){
    evento.preventDefault()
    let titulo = document.getElementById("inputTitulo").value;
    let year = document.getElementById("inputAnio").value;
    let tipo = document.getElementById("selectTipo").value;
    getMovie(titulo, year, tipo);
}

function getMovie(titulo, year, tipo){
    console.log(year);
    if(tipo=="todo"){
        tipo = "";
    }
    console.log(`https://www.omdbapi.com/?apikey=a004e2e7&s=${titulo}&y=${year}&type=${tipo}`)
    const movieData = fetch(`https://www.omdbapi.com/?apikey=a004e2e7&s=${titulo}&y=${year}&type=${tipo}`)
        .then(res => res.json())
        .then(res => {
            arr = res.Search;
            if(arr != null){
                arr.forEach(pelicula => {
                    console.log
                });
            }
            else{
                console.log("fortnite")
            }
        })
        .catch(error => console.log(error))
        .finally(() => console.log("terminé con el fetch")) 
}

