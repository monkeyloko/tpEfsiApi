
divPelis = document.getElementById("divPelis");
let tablaPelis = document.getElementById("tablaPelis");
document.getElementById("formPeliculas").addEventListener("submit", enviarForm);
function enviarForm(evento) {
    evento.preventDefault()
    let titulo = document.getElementById("inputTitulo").value;
    let year = document.getElementById("inputAnio").value;
    let tipo = document.getElementById("selectTipo").value;
    getMovie(titulo, year, tipo);
}

function getMovie(titulo, year, tipo) {
    console.log(year);
    if (tipo == "todo") {
        tipo = "";
    }

    titulo = titulo.replace(/\s+/g, '_');

    console.log(`https://www.omdbapi.com/?apikey=a004e2e7&s=${titulo}&y=${year}&type=${tipo}`)

    const movieData = fetch(`https://www.omdbapi.com/?apikey=a004e2e7&s=${titulo}&y=${year}&type=${tipo}`)
        .then(res => res.json())
        .then(res => {
            arr = res.Search;

            if (arr != null) {

                const tableHead = document.createElement("thead");
                const tableRow = document.createElement("tr");

                const tableH = document.createElement("th");
                tableH.innerHTML = "Titulo";
                const tableH2 = document.createElement("th");
                tableH2.innerHTML = "Año";
                const tableH3 = document.createElement("th");
                tableH3.innerHTML = "Tipo";

                tableRow.appendChild(tableH);
                tableRow.appendChild(tableH2);
                tableRow.appendChild(tableH3);
                tableHead.appendChild(tableRow);

                tablaPelis.appendChild(tableHead);

                const tableBody = document.createElement("tbody");

                arr.forEach(pelicula => {
                    let peliculaId = pelicula.imdbID
                    const peliRow = document.createElement("tr");
                    const titulo = document.createElement("td");
                    titulo.innerHTML = pelicula.Title;
                    const year = document.createElement("td");
                    year.innerHTML = pelicula.Year;
                    const tipo = document.createElement("td");
                    tipo.innerHTML = pelicula.Type;
                    peliRow.appendChild(titulo);
                    peliRow.appendChild(year);
                    peliRow.appendChild(tipo);
                    tableBody.appendChild(peliRow);
                });
                tablaPelis.appendChild(tableBody);
            }
            else {
                console.log("fortnite");
            }
        })
        .catch(error => console.log(error))
        .finally(() => console.log("terminé con el fetch"));
}


