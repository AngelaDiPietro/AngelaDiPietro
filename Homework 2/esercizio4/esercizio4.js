document.getElementById("quadrato").addEventListener("click", function () {
	var n = document.getElementById("value").value;
	var i;
	var array=[]
	for (i = 0; i < n; i++) {
		array[i] = (i+1)*(i+1);
	}

	document.getElementById("last_value").innerText = array;
	document.getElementById("end").innerText = "Fine elaborazione";

});