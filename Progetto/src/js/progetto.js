const $ = require('jquery');
//const Mustache = require('Mustache');

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
	$('.cookie').fadeOut();
});

//Jquery: come modificare il colore del like al click del mouse
$('.btn-default').on('click', event => {
	$(event.currentTarget).toggleClass("btn-success");
});

/**Chiamata Ajax con Mustache
$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'ajaxmustache.json',
		dataType: 'json',
		success: function (chiamata) {
			var template = $('#template').html();
			console.log(template);
			var rendered = Mustache.render(template, chiamata);
			console.log(rendered);
			$('#articoli').html(rendered);
	},
	error: function (chiamataFallita) {
		alert("Chiamata fallita");
	}
});

});
**/
$(document).ready(function(){
	$.ajax({
	url: 'ajax.json',
	method: "GET",
	success: function(chiamata){
		$('#title1').append("<h2>" + chiamata[0].text + "</h2>");
        $('#title1').append("<img src=" + chiamata[1].text + ">");
        $('#title1').append("<span class="+"'label label-primary'"+">" + chiamata[2].text + "</span>");  
        $('#title1').append("<p>" + chiamata[3].text + "</p>");
      
		$('#title2').append("<h2>" + chiamata[4].text + "</h2>");
        $('#title2').append("<img src=" + chiamata[5].text + ">");
        $('#title2').append("<span class="+"'label label-primary'"+">" + chiamata[6].text + "</span>");  
        $('#title2').append("<p>" + chiamata[7].text + "</p>");
        
        $('#title3').append("<h2>" + chiamata[8].text + "</h2>");
        $('#title3').append("<img src=" + chiamata[9].text + ">");
        $('#title3').append("<span class="+"'label label-primary'"+">" + chiamata[10].text + "</span>");  
        $('#title3').append("<p>" + chiamata[11].text + "</p>");
      

        $('#title4').append("<h2>" + chiamata[12].text + "</h2>");
        $('#title4').append("<img src=" + chiamata[13].text + ">");
        $('#title4').append("<span class="+"'label label-primary'"+">" + chiamata[14].text + "</span>");  
        $('#title4').append("<p>" + chiamata[15].text + "</p>");
        
	},
	error: function(chiamata){
		alert("Chiamata fallita");
	}
});
});
