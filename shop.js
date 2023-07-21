
let manuBtn = document.getElementById("manuBtn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu");

sideNav.style.right = "-230px";

manuBtn.onclick = function() {
   if (sideNav.style.right == "-230px"){
      sideNav.style.right = "0";
   } else {
      sideNav.style.right = "-230px";
   }
}
/*
$('#manuBtn').on('click', function(){
   $('#sideNav').animate({ right : 0});
});
$('#manuBtn').on('click', function(){
   $('#sideNav').animate({ right : -230});
});*/




let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});


