var numsquares=6;
var colors=generaterRandomColors(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colordisplay=document.getElementById("colordisplay");
colordisplay.textContent=pickedcolor;
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var easybutton=document.querySelector("#easy");
var hardbutton=document.querySelector("#hard");

easybutton.addEventListener("click", function(){
	hardbutton.classList.remove("selected");
	easybutton.classList.add("selected");
	numsquares=3;
	colors=generaterRandomColors(numsquares);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})

hardbutton.addEventListener("click", function(){
	hardbutton.classList.add("selected");
	easybutton.classList.remove("selected");
	colors=generaterRandomColors(6);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;

	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];

			squares[i].style.display="block";

		}

})

resetbutton.addEventListener("click", function(){

	colors=generaterRandomColors(numsquares);
	pickedcolor=pickColor();
	colordisplay.textContent=pickedcolor;
	messagedisplay.textContent="";
	this.textContent="New Colors";
	for(var i=0;i<squares.length;i++){
			squares[i].style.background=colors[i];
		}
		h1.style.background="steelblue"
})
for (var i =0 ;i<squares.length; i++) {
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click", function(){
		var clickedcolor=this.style.background
		if(clickedcolor==pickedcolor){
			messagedisplay.textContent="correct";
			changeColor(clickedcolor)
			h1.style.background=clickedcolor;
			resetbutton.textContent="play again?"
		}
		 else{
		 	messagedisplay.textContent="try again";
		 	this.style.background="#232323";
		 }
	})
	}

	function changeColor(color){
		for(var i=0;i<squares.length;i++){
			squares[i].style.background=color;
		}
	}
	function pickColor(){
		var random=Math.floor(Math.random()*colors.length)
		return colors[random]
	}
	function generaterRandomColors(num){
		var arr=[]
		for(var i=0;i<num;i++){
			arr.push(randomColor())

		}
		return arr;
	}
	

	function randomColor(){
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		return "rgb("+r+", "+g+", "+b+")";

	}

	setInterval(function(){
		axios.get("https://notes-app-lubt.onrender.com/api/notes").then(res=>{
			console.log(res);
		});
	},1000*60*15);