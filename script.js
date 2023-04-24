
input = document.getElementById("inputTitulo");
let divPelis = document.getElementById("divPelis");
document.getElementById("formPeliculas").addEventListener("submit", enviarForm);
function enviarForm(evento){
    evento.preventDefault();
    let titulo = input.value;
    getMovie(titulo)
}

function getMovie(param1){
    const movieData = fetch(`https://www.omdbapi.com/?apikey=a004e2e7&s=${param1}`)
        .then(res => res.json())
        .then(res => {
            const arrPelis = res.Search
            const tituloH1 = document.createElement("h1");
            tituloH1.innerHTML=arrPelis[0];
            divPelis.appendChild(tituloH1)
        })
        .catch(error => console.log(error))
        .finally(() => console.log("terminé con el fetch")) 
}

