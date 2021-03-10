
var valtA = document.getElementById("a").value;
var valtB = document.getElementById("b").value;

function osszeadas() {
    var osszeg = Number(valtA) + Number(valtB);
    document.getElementById("szoveg").innerHTML = osszeg;
}
function kivonas() {
    var osszeg = Number(valtA) - Number(valtB);
    document.getElementById("szoveg").innerHTML = osszeg;
}
function szorzas() {
    var osszeg = Number(valtA) * Number(valtB);
    document.getElementById("szoveg").innerHTML = osszeg;
}
function osztas() {
    var osszeg = Number(valtA) / Number(valtB);
    document.getElementById("szoveg").innerHTML = osszeg;
}
function szamolas() {

    var valtM = document.getElementById("muvjel").value;
    if (valtM === "+") {
        osszeadas();
    } else if (valtM === "-") {
        kivonas();
    } else if (valtM === "*") {
        szorzas();
    } else if (valtM === "/") {
        osztas();
    }
    document.getElementById("szoveg").innerHTML = osszeg;
}
