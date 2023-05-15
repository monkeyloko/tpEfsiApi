
divtest = document.getElementById("test");
divPelis = document.getElementById("divPelis");
let tablaPelis = document.getElementById("tablaPelis");
if (document.getElementById("formPeliculas")) {
    document.getElementById("formPeliculas").addEventListener("submit", enviarForm);
}
if (document.URL.includes("detallePeli.html")) {
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");
    console.log(id);

    const movieData = fetch(`https://www.omdbapi.com/?apikey=a004e2e7&i=${id}`)
        .then(res => res.json())
        .then(res => {
            let divDetalle = document.createElement("div")
            divDetalle.classList.add("pelicula-info")

            let img = document.createElement("img")
            img.src = res.Poster;
            let titulo = document.createElement("h1")
            titulo.innerHTML = res.Title
            let año = document.createElement("p")
            año.innerHTML = res.Year
            let genero = document.createElement("p")
            genero.innerHTML = res.Genre

            let divPlot = document.createElement("div")
            divPlot.classList.add("plot")

            let plot = document.createElement("p")
            plot.innerHTML = res.Plot
            divDetalle.appendChild(titulo)
            divDetalle.appendChild(img)

            divDetalle.appendChild(año)
            divDetalle.appendChild(genero)
            divPlot.appendChild(plot)
            divtest.appendChild(divDetalle)
            divtest.appendChild(divPlot)
        });

}
function enviarForm(evento) {
    evento.preventDefault()
    let titulo = document.getElementById("inputTitulo").value;
    let year = document.getElementById("inputAnio").value;
    let tipo = document.getElementById("selectTipo").value;
    let season = document.getElementById("season").value;
    let episode = document.getElementById("episode").value;
    getMovie(titulo, year, tipo, season, episode);
}

function mostrarDetalles(id) {
    let s = "a";

    divPelis.innerHTML = s;
}

function getMovie(titulo, year, tipo, season, episode) {
    tablaPelis.innerHTML = "";
    let isEpisode = (tipo == "episode")
    titulo = titulo.replace(/\s+/g, '_');
    console.log(`https://www.omdbapi.com/?apikey=a004e2e7&t=${titulo}&y=${year}&type=${tipo}`)
    let appendix = "";
    let ToS = "s";
    if (isEpisode) {
        console.log("if")
        appendix = `&season=${season}&episode=${episode}`
        tipo = "series";
        ToS = "t";
    }
    console.log(appendix)
    let url = `https://www.omdbapi.com/?apikey=a004e2e7&${ToS}=${titulo}&y=${year}&type=${tipo}`
    url += appendix;
    console.log(url);
    const movieData = fetch(url)
        .then(res => res.json())
        .then(res => {
            arr = res.Search;
            console.log(res.Response);
            if (res.Response) {
                console.log("apex legends")
                if (isEpisode == false) {
                    const tableHead = document.createElement("thead");
                    const tableRow = document.createElement("tr");

                    const tableH = document.createElement("th");
                    tableH.innerHTML = "Titulo";
                    const tableH2 = document.createElement("th");
                    tableH2.innerHTML = "Año";
                    const tableH3 = document.createElement("th");
                    tableH3.innerHTML = "Tipo";
                    const tableH4 = document.createElement("th");
                    tableH4.innerHTML = "Detalles";

                    tableRow.appendChild(tableH);
                    tableRow.appendChild(tableH2);
                    tableRow.appendChild(tableH3);
                    tableRow.appendChild(tableH4);
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
                        const detalleRow = document.createElement("td");
                        const detalleBoton = document.createElement("a");
                        detalleBoton
                        const divBoton = document.createElement("div");
                        divBoton.classList.add("divBoton")

                        detalleBoton.classList.add("btn")
                        detalleBoton.classList.add("btn-primary")
                        detalleBoton.classList.add("botonTabla")
                        detalleBoton.setAttribute("href", "detallePeli.html?id=" + peliculaId);
                        peliRow.appendChild(titulo);
                        peliRow.appendChild(year);
                        peliRow.appendChild(tipo);
                        divBoton.appendChild(detalleBoton)
                        detalleRow.appendChild(divBoton)
                        peliRow.appendChild(detalleRow)
                        tableBody.appendChild(peliRow);


                    });
                    tablaPelis.appendChild(tableBody);
                }
                else {
                    console.log("a")
                    let peliculaId = res.imdbID
                    const tableHead = document.createElement("thead");
                    const tableRow = document.createElement("tr");


                    const tableH = document.createElement("th");
                    tableH.innerHTML = "Titulo";

                    const tableH2 = document.createElement("th");
                    tableH2.innerHTML = "Año";
                    const tableH3 = document.createElement("th");
                    tableH3.innerHTML = "Tipo";

                    const tableH4 = document.createElement("th");
                    tableH4.innerHTML = "Temporada";

                    const tableH5 = document.createElement("th");
                    tableH5.innerHTML = "Episodio";

                    const tableH6 = document.createElement("th");
                    tableH6.innerHTML = "Detalles";

                    tableRow.appendChild(tableH);

                    tableRow.appendChild(tableH2);
                    tableRow.appendChild(tableH3);
                    tableRow.appendChild(tableH4);
                    tableRow.appendChild(tableH5);
                    tableRow.appendChild(tableH6);

                    tableHead.appendChild(tableRow);
                    const detalleRow = document.createElement("td");
                    const detalleBoton = document.createElement("a");
                    detalleBoton
                    const divBoton = document.createElement("div");
                    divBoton.classList.add("divBoton")


                    detalleBoton.classList.add("btn")
                    detalleBoton.classList.add("btn-primary")
                    detalleBoton.classList.add("botonTabla")
                    detalleBoton.setAttribute("href", "detallePeli.html?id=" + peliculaId);

                    tablaPelis.appendChild(tableHead);
                    const tableBody = document.createElement("tbody");
                    const peliRow = document.createElement("tr");
                    const titulo = document.createElement("td");
                    titulo.innerHTML = res.Title;
                    const year = document.createElement("td");
                    year.innerHTML = res.Year;
                    const tipo = document.createElement("td");
                    tipo.innerHTML = res.Type;
                    const temporada = document.createElement("td");
                    temporada.innerHTML = res.Season;
                    const Episodio = document.createElement("td");
                    Episodio.innerHTML = res.Episode;
                    console.log(titulo)

                    peliRow.appendChild(titulo);

                    peliRow.appendChild(year);
                    peliRow.appendChild(tipo);
                    peliRow.appendChild(temporada)
                    peliRow.appendChild(Episodio)
                    divBoton.appendChild(detalleBoton)
                    detalleRow.appendChild(divBoton)
                    peliRow.appendChild(detalleRow)
                    tableBody.appendChild(peliRow);
                    tablaPelis.appendChild(tableBody);
                }

            }
            else {
                console.log("fortnite");
            }
        })
        .catch(error => console.log(error))
        .finally(() => console.log("terminé con el fetch"));
}


