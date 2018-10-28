const $ = require('jquery');
const Mustache = require('Mustache');

/*JAVA SCRIPT: come far scomparire il cookie al click di here
var here=document.getElementById('here');
function closeCookie() {
	document.getElementById('cookie_delete').style.display='none';
};
here.addEventListener("click",closeCookie);

JavaScript: come modificare il colore del like al click del mouse
for (var i = 0; i <like.length;  i++) {
	like[i].addEventListener("click",function(){
		
		if (this.style.backgroundColor==="white"){
			this.style.backgroundColor="#32cd32";
			}else{
			this.style.backgroundColor="white";	
	}
	});
} */

//JQUERY: come far scomparire il cookie al click di here
$('#here').on('click', () => {
	$('.cookie').fadeout();
});

//Jquery: come modificare il colore del like al click del mouse
$('.btn, .btn-default').on('click', event => {
	$(event.currentTarget).toggleClass("btn-success");
});

//Chiamata Ajax
$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'ajax.json',
		dataType: 'json',
		success: function (chiamata) {
			var template = $('#template').html();
			console.log(template);
			var rendered = Mustache.render(template, chiamata);
			console.log('il renderizzato:');
			console.log(rendered);
			$('#articoli').html(rendered);
	},
	error: function (chiamataFallita) {
		alert("Chiamata fallita");
	}
});

});


