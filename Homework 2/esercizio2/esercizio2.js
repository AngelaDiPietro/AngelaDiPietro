
var array=[1,2,3,4,5,6,7,8,9,10,11,10,11,12,13,14.15];
var array_last=[];

for (var i = 0; i<array.length; i++) {
	array_last[i]=array[i]*array[i];
}

document.getElementById("array").innerText = array;
document.getElementById("array_last").innerText = array_last;
document.getElementById("end").innerText = "Fine elaborazione";
