var array_color = ["#00ffff", "#000080", "#008080","#dc143c","#ff1493"," #dda0dd","  #ffff00"];
var i = 0;
var step;
var start_again;

document.getElementById("body").onload = function () {
    step=window.setInterval(fun, 15000);
};


function fun() {
    if (i === array_color.length) {
        i = 0;
        document.getElementById("body").style.backgroundColor = array_color[i];
    } else {
        document.getElementById("body").style.backgroundColor = array_color[i];
        i++;
    }
}

document.getElementById("ferma").addEventListener("click", function () {
    clearInterval(step);
    var temporanea = document.getElementById("body").style.backgroundColor;
    document.getElementById("body").style.backgroundColor = temporanea;
start_again=i;
});

document.getElementById("continua").addEventListener("click", function () {
    step=window.setInterval(fun, 15000);
});
