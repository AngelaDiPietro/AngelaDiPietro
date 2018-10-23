var array_administrator = ["Angela", "Chiara"];
document.getElementById("check").addEventListener("click", function () {

    var name = document.getElementById("name").value;
    var i;
    var bool = false;
    for (i = 0; i < array_administrator.length; i++) {
        if (name.toString() === array_administrator[i]) {
            bool = true
        }
    }
    if (bool === true) {
        document.getElementById("verdict").innerText = "L'utente e' abilitato ad accedere alla pagina";
    } else {
        document.getElementById("verdict").innerText = "L'utente digitato non ha i diritti per accedere alla pagina";
    }

});