function MetodogetElementById() {
    x = document.getElementById("intro").innerHTML;
    document.write("<p>Aquí vemos de nuevo el texto con el metodo getElementById: " + x + "</p>");
}


function MetodogetElementsByTagName() {
    y = document.getElementsByTagName("p");
    document.write("<p>Aquí vemos de nuevo el texto con el metodo getElementsByTagName: " + y[1].innerHTML + "</p>");
}

function MetodogetElementsByClassName(){
    z = document.getElementsByClassName("letras");
    document.write("<p>Aquí vemos de nuevo el texto con el metodo getElementsByClassName: " + z[1].innerHTML + "</p>");
}

function obtenerTotal(){
    a = parseInt(document.getElementsByClassName("precio")[0].innerHTML);
    b = parseInt(document.getElementsByClassName("precio")[1].innerHTML);
    c = parseInt(document.getElementsByClassName("precio")[2].innerHTML);

    var sum = a+b+c;
    document.getElementById("total").innerHTML = sum;
}


function vertotal(){
    x = document.getElementById("total").innerHTML;
    document.write("<h2>El monto total es: " + x + " soles</h2>");
}