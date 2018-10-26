const $ = require('jquery');

/*
//Java Scrip: come far scomparire il cookie al click di here
var here=document.getElementById('here');
function closeCookie() {
	document.getElementById('cookie_delete').style.display='none';
};
here.addEventListener("click",closeCookie);*/
	$(document).ready(function(){
		$.ajax({
	    	type: 'GET',
		    url: 'ajax.json',
		    dataType: 'json',
	    	success: function (chiamata) {
		        for (var i = 0; i < chiamata.length; i++) 
		        $('#newArticle').append(chiamata[i]).text);	
		        },
		    error: function () {
		        alert("Chiamata fallita");
		    }
		});
	
});
 

//Jquery: come far scomparire il cookie al click di here
$('#here').on('click', () => {
  $('.cookie').hide();
});

 /*
 $('.btn btn-default').on('click',event =>{
   $(event.currentTarget).ToggleClass('.btn btn-success');
 });
 
/*
//JavaScript: come modificare il colore del like al click del mouse
for (var i = 0; i <like.length;  i++) {
	like[i].addEventListener("click",function(){
		
		if (this.style.backgroundColor==="white"){
			this.style.backgroundColor="#32cd32";
			}else{
			this.style.backgroundColor="white";	
	}
	});
}*/