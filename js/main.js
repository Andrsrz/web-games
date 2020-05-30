function pageLoaded(){
	console.log("Hello, world!");
	windowConfig();
}

function windowConfig(){
	/* Our canvas */
	let window = document.getElementById("window");
	window.setAttribute("width", "640");
	window.setAttribute("height", "480");
	window.setAttribute("style", "border: #000 1px solid;");
}
