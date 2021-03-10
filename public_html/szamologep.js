szamolas();

var valtA = document.getElementById("a").value;
var valtB = document.getElementById("b").value;
var valtM = document.getElementById("muvjel").value;
var osszeg = 0;

function szamolas() {
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

function osszeadas() {
    osszeg = Number(valtA) + Number(valtB);
}
function kivonas() {
    osszeg = Number(valtA) - Number(valtB);
}
function szorzas() {
    osszeg = Number(valtA) * Number(valtB);
}
function osztas() {
    osszeg = Number(valtA) / Number(valtB);
}