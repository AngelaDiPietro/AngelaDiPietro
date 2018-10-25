const $ = require('jquery');
console.lof('Hello world');
console.lof('watch');
/*
//Java Scrip: come far scomparire il cookie al click di here
var here=document.getElementById('here');
function closeCookie() {
	document.getElementById('cookie_delete').style.display='none';
};
here.addEventListener("click",closeCookie);*/

//Jquery: come far scomparire il cookie al click di here

$('#here').on('click', () => {
  $('.cookie').hide();
});


 $('.like').on('click',event =>{
   $(event.currentTarget).ToggleClass('green-like');
  }
 
function doAjax(){
	$.ajax({

		
	}
}

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
