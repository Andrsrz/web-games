var WIDTH = 640;
var HEIGHT = 480;

function pageLoaded(){
	console.log("Hello, world!");
	let context = windowConfig();
	draw(context);
}

function windowConfig(){
	/* Our canvas */
	let window = document.getElementById("window");
	window.setAttribute("width", WIDTH);
	window.setAttribute("height", HEIGHT);
	window.setAttribute("style", "border: #000 2px solid;");
	/* Our 2D context for our canvas */
	let context = window.getContext("2d");
	return context;
}

function draw(canvasContext){
	/* player */
	canvasContext.fillRect(10, 10, 50, 50);
}
