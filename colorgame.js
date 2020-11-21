 var ts=6;
var colors= generaterc(ts);
var pickedcolor = pc();
console.log(pickedcolor);
var cd=document.getElementById("colordisplay");
var squares = document.querySelectorAll(".square");
var msg = document.getElementById("message");
var h1=document.querySelector("h1");
var rb=document.querySelector("#reset");
// rb.addEventListener("click",function(){
// alert("clicked");
// });
var e=document.querySelector("#easy");
var h=document.querySelector("#hard");
e.addEventListener("click",function(){
	e.classList.add("selected");
	h.classList.remove("selected");
	ts=3;
	colors = generaterc(ts);
	pickedcolor = pc();
	cd.textContent = pickedcolor ; 
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none" ; 
		}
	}

});
h.addEventListener("click",function(){
	h.classList.add("selected");
	e.classList.remove("selected");
	ts=6;
	colors = generaterc(ts);
	pickedcolor = pc();
	cd.textContent = pickedcolor ;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block" ;
	}
});
rb.addEventListener("click",function(){
	colors = generaterc(ts);
	pickedcolor = pc();
	cd.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323" ;
});
cd.textContent = pickedcolor;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		var clicked = this.style.backgroundColor;
		if(clicked===pickedcolor){
			console.log(clicked,pickedcolor);
			msg.textContent = "Correct" ;
			 changecolors(clicked);
			 h1.style.backgroundColor = clicked ;
			 rb.textContent = "Play Again" ;

		}
		else{
			msg.textContent = "Try Again" ; 
			this.style.backgroundColor = "#232323";
		}
	});
}
function changecolors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color ;
	}
}
function pc(){
	var random = Math.floor(Math.random()*colors.length );
	return colors[random];
}
function generaterc(num){
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(rc());
	}
	return arr;
}
function rc(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}
