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


    








var animes = document.getElementById("divAnimes")
animes.style.visibility = "hidden";