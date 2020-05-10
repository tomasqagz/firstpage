var titulo = document.getElementById("titulo");
titulo.style.border= "5px dotted pink";


var ftv = document.getElementById("ftv")
ftv.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
ftv.style.fontSize = "xx-small"


var hrs = document.querySelectorAll(".hrs")
for (i = 0; i < hrs.length; i++) {
    hrs[i].color = "purple"
    hrs[i].size = "7px"
    
}
    
var divAnimes = document.getElementById("divAnimes")
var divSeries = document.getElementById("divSeries")
var divMovies = document.getElementById("divMovies")
var divGames = document.getElementById("divGames")

var animesBtn = document.getElementById("animesBtn")
var seriesBtn = document.getElementById("seriesBtn")
var moviesBtn = document.getElementById("moviesBtn")
var gamesBtn = document.getElementById("gamesBtn")


animesBtn.addEventListener("click",() => {
    divAnimes.style.display = "block"
    divSeries.style.display = "none"
    divMovies.style.display = "none"
    divGames.style.display = "none"

});

seriesBtn.addEventListener("click",() => {
    divAnimes.style.display = "none"
    divSeries.style.display = "block"
    divMovies.style.display = "none"
    divGames.style.display = "none"

});

moviesBtn.addEventListener("click",() => {
    divAnimes.style.display = "none"
    divSeries.style.display = "none"
    divMovies.style.display = "block"
    divGames.style.display = "none"

});

gamesBtn.addEventListener("click",() => {
    divAnimes.style.display = "none"
    divSeries.style.display = "none"
    divMovies.style.display = "none"
    divGames.style.display = "block"

});