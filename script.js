
divPelis = document.getElementById("divPelis");
let tablaPelis = document.getElementById("tablaPelis");
document.getElementById("formPeliculas").addEventListener("submit", enviarForm);
function enviarForm(evento) {
    evento.preventDefault()
    let titulo = document.getElementById("inputTitulo").value;
    let year = document.getElementById("inputAnio").value;
    let tipo = document.getElementById("selectTipo").value;
    let season = document.getElementById("season").value;
    let episode = document.getElementById("episode").value;


    getMovie(titulo, year, tipo, season, episode);
}

function getMovie(titulo, year, tipo, season, episode) {
    tablaPelis.innerHTML="";
    let isEpisode = (tipo == "episode")
    titulo = titulo.replace(/\s+/g, '_');
    console.log(`https://www.omdbapi.com/?apikey=a004e2e7&t=${titulo}&y=${year}&type=${tipo}`)
    let appendix = "";
    let ToS = "s";
    if(isEpisode){
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
                if(isEpisode == false){
                    const tableHead = document.createElement("thead");
                    const tableRow = document.createElement("tr");
    
                    const tableH = document.createElement("th");
                    tableH.innerHTML = "Titulo";
                    const tableH2 = document.createElement("th");
                    tableH2.innerHTML = "Año";
                    const tableH3 = document.createElement("th");
                    tableH3.innerHTML = "Tipo";
                    const tableH4 = document.createElement("th");
                    tableH4.innerHTML = "ver";
    
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
    
                        detalleBoton.classList.add("btn")
                        detalleBoton.classList.add("btn-primary")
                        detalleBoton.setAttribute("href", "detallePeli.html")
                        
                        peliRow.appendChild(titulo);
                        peliRow.appendChild(year);
                        peliRow.appendChild(tipo);
                        peliRow.appendChild(detalleBoton)
                        
                        tableBody.appendChild(peliRow);
                        
    
                    });
                    tablaPelis.appendChild(tableBody);
                }
                else{
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

    
                    tableRow.appendChild(tableH);
                 
                    tableRow.appendChild(tableH2);
                    tableRow.appendChild(tableH3);
                    tableRow.appendChild(tableH4);
                    tableRow.appendChild(tableH5);
                    tableHead.appendChild(tableRow);
    
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


