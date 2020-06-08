
// Grafiken vorladen
Grafik = new Array(15);
for (i = 0; i < 15; i++) {
    Grafik[i] = new Image();
    Grafik[i].src = "Globen/" + i + ".gif";
}



i = 14;
function rotation() {
    document.getElementsByTagName('img')["globus"].src = "Globen/" + i + ".gif";
    if (i > 0) i--; else i = 14;

    setTimeout('rotation()', 100);
}
