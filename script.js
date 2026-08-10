function upDate(element) {
    console.log("Evento activado");

    document.getElementById("display").innerHTML = element.alt;
    document.getElementById("display").style.backgroundImage = "url('" + element.src + "')";
}

function unDo(element) {
    document.getElementById("display").innerHTML =
        "Pase el mouse sobre una imagen o selecciónela con el teclado";

    document.getElementById("display").style.backgroundImage = "none";
}

function addTabIndex() {
    console.log("Evento onload activado");

    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

