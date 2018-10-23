
var x=3;
var y=2;
var piu="+";
var meno="-";
var per="*";
var diviso="/";
var uguale="=";


document.getElementById("var1Sum").innerText=x;
document.getElementById("var2Sum").innerText=y;
document.getElementById("sum").innerText=piu;
document.getElementById("ugualeSum").innerText=uguale;
document.getElementById("risultatoSum").innerText=(x+y);

document.getElementById("var1Subtraction").innerText=x;
document.getElementById("var2Subtraction").innerText=y;
document.getElementById("subtraction").innerText=meno;
document.getElementById("ugualeSubtraction").innerText=uguale;
document.getElementById("risultatoSubtraction").innerText=(x-y);

document.getElementById("var1Multiplication").innerText=x;
document.getElementById("var2Multiplication").innerText=y;
document.getElementById("multiplication").innerText=per;
document.getElementById("ugualeMultiplication").innerText=uguale;
document.getElementById("risultatoMultiplication").innerText=(x*y);

document.getElementById("var1Division").innerText = x;
document.getElementById("var2Division").innerText = y;
document.getElementById("division").innerText = diviso;
document.getElementById("ugualeDivision").innerText = uguale;
document.getElementById("risultatoDivision").innerText = (x/y);