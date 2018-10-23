var here=document.getElementById('here');

function closeCookie() {
	document.getElementById('cookie_delete').style.display='none';
};

here.addEventListener("click",closeCookie);



var like=document.getElementsByClassName('like');

for (var i = 0; i <like.length;  i++) {
	like[i].addEventListener("click",function(){
		
		if (this.style.backgroundColor="white"){
			this.style.backgroundColor="#32cd32";
			}else{
			this.style.backgroundColor="white";	
	}
	});
}
