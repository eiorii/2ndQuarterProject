window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
var body = document.getElementsByTagName('body')[0];

var counter = 0;
function func2() {
counter++;
if(counter%3==0){

  document.getElementById("container").style.backgroundColor = "rgba(25, 45, 100, 0.8)";
  document.getElementById("container").style.borderColor = "rgb(51, 51, 255)";
  document.getElementById("navbar").style.backgroundColor = "rgba(25, 45, 100, 0.9)";
body.style.backgroundImage = 'url(https://i.pinimg.com/originals/48/15/d5/4815d513fb60fc61b41fba19efb4da85.jpg)'
document.getElementsByTagName('fieldset')[0].style.borderColor = "rgb(51, 51, 255)";
document.getElementsByTagName('table')[0].style.backgroundColor = "rgba(25, 45, 100, 0.9)";

}

if(counter%3==1){
  document.getElementById("container").style.backgroundColor = "rgba(140, 15, 35, 0.8)";
  document.getElementById("container").style.borderColor = "rgb(255,51,51)";
  document.getElementById("navbar").style.backgroundColor = "rgba(140, 15, 35, 0.9)";
body.style.backgroundImage = 'url(http://www.talencia.cat/mypics/max/13/130669_anime-fall-background.jpg)'
document.getElementsByTagName('fieldset')[0].style.borderColor = "rgba(255,51,51)";
document.getElementsByTagName('table')[0].style.backgroundColor = "rgba(140, 15, 35, 0.9)";
}

if(counter%3==2){

  document.getElementById("container").style.backgroundColor = "rgba(25, 100, 25, 0.8)";
  document.getElementById("container").style.borderColor = "rgb(51, 255, 51)";
  document.getElementById("navbar").style.backgroundColor = "rgba(25, 100, 25, 0.9)";
body.style.backgroundImage = 'url(https://www.itl.cat/pngfile/big/139-1399485_cute-anime-hd-wallpapers-iphone-anime-girl-with.jpg)'
document.getElementsByTagName('fieldset')[0].style.borderColor = "rgb(51, 255, 51)";
document.getElementsByTagName('table')[0].style.backgroundColor = "rgba(25, 100, 25, 0.9)";
}

}


function result(){
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var x = 0;
var h = "a";
if(document.getElementById('a1').checked) {
	a++;}
else if (document.getElementById('a2').checked) {
	a = a +2;}
else{ a= a; }
if(document.getElementById('aa1').checked) {
	a++;}
else if (document.getElementById('aa2').checked) {
	a = a +2;}

else { a = a; }
if(document.getElementById('b1').checked) {
	b++;}
else if (document.getElementById('b2').checked) {
	b = b +2;}
else{ b = b; }
if(document.getElementById('bb1').checked) {
	b++;}
else if (document.getElementById('bb2').checked) {
	b = b +2;}
else{ b = b; }
if(document.getElementById('c1').checked) {
	c++;}
else if (document.getElementById('c2').checked) {
	c = c +2;}
else{ c = c; }
if(document.getElementById('cc1').checked) {
	c++;}
else if (document.getElementById('cc2').checked) {
	c = c +2;}
else{ c = c; }
if(document.getElementById('d1').checked) {
	d++;}
else if (document.getElementById('d2').checked) {
	d = d +2;}
else{ d = d; }
if(document.getElementById('dd1').checked) {
	d++;}
else if (document.getElementById('dd2').checked) {
	d = d +2;}
else{ d = d; }
if(document.getElementById('e1').checked) {
	e++;}
else if (document.getElementById('e2').checked) {
	e = e +2;}
else{ e = e; }
if(document.getElementById('ee1').checked) {
	e++;}
else if (document.getElementById('ee2').checked) {
	e = e +2;}
else{ e = e; }
if(document.getElementById('f1').checked) {
	f++;}
else if (document.getElementById('f2').checked) {
	f = f +2;}
else{ f = f; }
if(document.getElementById('ff1').checked) {
	f++;}
else if (document.getElementById('ff2').checked) {
	f = f +2;}
else{ f = f; }

if(a<b){
	x = b;
	h = "b";
}

if(b<c){
	x = c;
	h = "c";
}

if(c<d){
	x = d;
	h = "d";
}

if(d<e){
	x = e;
	h = "e";
}
if(a<b){
	x = f;
	h = "f";
}

if(h=="a"){
	document.getElementById("result").innerHTML = "You are a Hopper!";
	document.getElementById("subresult").innerHTML = "You can transition from one task to another. And you are quite good at multitasking. However, you are easily distracted by little things. To prevent this, set your priorities first before doing your work!";
}
else if(h=="b"){
	document.getElementById("result").innerHTML = "You are a Hyper Focuser!";
	document.getElementById("subresult").innerHTML = "It is very hard for you to transition from one task to another. And you are prone to be caught in those small little details. To prevent this, make an outline and show the major goals instead of the intricacies.";
}
else if(h=="c"){
	document.getElementById("result").innerHTML = "You are a Big Picture Thinker!";
	document.getElementById("subresult").innerHTML = "You think very broadly, and in projects, you rather think of the big ideas of the project instead of the technicalities. You rather hate those small details necessary to finish your ideal work, and you might end up skipping those small yet crucial details to the detriment of your work. To prevent this, try to actually learn how the details eventually make up the big work that you envisioned";
}
else if(h=="d"){
	document.getElementById("result").innerHTML = "You are a Perfectionist!";
	document.getElementById("subresult").innerHTML = "It is very hard for you to trust your groupmates in a project, and you rather want to do most, if not all of the work. You also have high standards about your own work or of others. By doing this, you make the work less efficient. In order to offset this, try to at least be on an agreeable stance when dealing with groupmates, and to at least trust them that they will finish their work.";
}
else if(h=="e"){
	document.getElementById("result").innerHTML = "You are a Shiny Object Chaser!";
	document.getElementById("subresult").innerHTML = "You love exciting things. Especially very exciting things. And you love boring things. Very boring. You have a low attention span and a low patience. But these traits are necessary to finish comprehensive projects. To help in solving this problem, learn a skill that takes time to work, and this will improve your patience.";
}
else if(h=="f"){
	document.getElementById("result").innerHTML = "You are an Elite Crammer!";
	document.getElementById("subresult").innerHTML = "When's the deadline? Not tomorrow? I ain't gonna do it! This is really how you think, and to be fair, you generate more ideas and be more disciplined under pressure. However, this can lead to overlooked mistakes that could have been solved given enough time. So to pevent this, just don't cram the night before! (maybe the 2 nights before is good;"
}
}