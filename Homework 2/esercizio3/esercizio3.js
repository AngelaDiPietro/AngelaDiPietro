
var somma = document.getElementById("somma");
var differenza = document.getElementById("differenza");
var prodotto = document.getElementById("prodotto");
var quoziente = document.getElementById("quoziente");


Sum.addEventListener("click", function () {
    var addendo1 = parseInt(document.getElementById("variabile1").value);
    var addendo2= parseInt(document.getElementById("variabile2").value);
    var risultato = addendo1 + addendo2;
    document.getElementById("risultato").innerText = risultato;
});

Subtraction.addEventListener("click", function () {
    var minuendo = parseInt(document.getElementById("variabile1").value);
    var sottraendo = parseInt(document.getElementById("variabile2").value);
    var risultato = minuendo - sottraendo;
    document.getElementById("risultato").innerText = risultato;
});

Multiplication.addEventListener("click", function () {
    var fattore1 = parseInt(document.getElementById("variabile1").value);
    var fattore2 = parseInt(document.getElementById("variabile2").value);
    var risultato= fattore1 * fattore2;
    document.getElementById("risultato").innerText = risultato;
});

Division.addEventListener("click", function () {
    var dividendo = parseFloat(document.getElementById("variabile1").value);
    var divisore= parseFloat(document.getElementById("variabile2").value);
    var risultato = dividendo / divisore;
    document.getElementById("risultato").innerText = risultato;
});
