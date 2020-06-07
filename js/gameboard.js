const Gameboard = (() => {
	var size = [640, 480];
	var style = "border: #000 2px solid";
	var myCanvas;
	var myContext;
	var player;

	const loadGameboard = () => {
		myCanvas = document.getElementById("myCanvas");
		myCanvas.setAttribute("width", size[0]);
		myCanvas.setAttribute("height", size[1]);
		myCanvas.setAttribute("style", style);
		myContext = myCanvas.getContext("2d");
	}


	const draw = () => {
		player = Snake();
		myContext.fillRect(10, 10, 50, 50);
	}

	const pageLoaded = () => {
		console.log("Hello");
		loadGameboard();
		draw();
	}

	return {pageLoaded};
})();
