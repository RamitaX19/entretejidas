const btn = document.getElementById("showMore");
const extra = document.getElementById("extraImg");
const showLess = document.getElementById("showLess");
const gallery = document.getElementById("galeria1");
const gallery1 = document.getElementById("galeria2");

showMore.addEventListener("click", function () {
    extraImg.classList.add("visible");
    showMore.style.display = "none";
    showLess.style.display = "inline-block";
});

showLess.addEventListener("click", function () {
    extraImg.classList.remove("visible");
    showMore.style.display = "inline-block";
    showLess.style.display = "none";
    gallery1.scrollIntoView({ behavior: "smooth" });
});
////////////////////////////////////////////////////////////////////////////////////////////////
showMore2.addEventListener("click", function () {
    extraImg2.classList.add("visible");
    showMore2.style.display = "none";
    showLess2.style.display = "inline-block";
});

showLess2.addEventListener("click", function () {
    extraImg2.classList.remove("visible");
    showMore2.style.display = "inline-block";
    showLess2.style.display = "none";
    gallery.scrollIntoView({ behavior: "smooth" });
});
//BOTON-LINK
document.getElementById("botonWSP").addEventListener("click", function() {
    window.open("https://wa.me/5491144131253", "_blank");
});
document.getElementById("botonIG").addEventListener("click", function() {
    window.open("https://www.instagram.com/entretejidas_crochet/", "_blank");
});
document.getElementById("botonFB").addEventListener("click", function() {
    window.open("https://www.facebook.com/Entretejidastejart?locale=es_LA", "_blank");
});
document.getElementById("botonYT").addEventListener("click", function() {
    window.open("https://www.youtube.com/@entretejidastejidosartesan6093", "_blank");
});
document.getElementById("botonTK").addEventListener("click", function() {
    window.open("https://www.tiktok.com/@entretejidastart", "_blank");
});
document.getElementById("botonMAPS").addEventListener("click", function() {
    window.open("https://www.google.com.ar/maps/place/Entretejidas+Lanas+y+Mercer%C3%ADa/@-31.9047886,-64.5714444,19.6z/data=!4m6!3m5!1s0x95d2b3a2e6c2dee7:0x7d4d6e557993c94a!8m2!3d-31.9048481!4d-64.571343!16s%2Fg%2F11w4tnjl8z?hl=es&entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D", "_blank");
});
