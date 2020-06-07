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

	const getRandomPositon = () => {
		let position = [];
		/* Fill position array */
		for(let i = 0; i < 2; i++){
			let min = Math.ceil(0);
			let max = Math.floor(size[i]);
			position.push(Math.floor(Math.random() * (max - min)) + min);
		}

		return position;
	}

	const draw = () => {
		player = Snake(getRandomPositon());
		console.log(player.getPosition()[0]);
		myContext.fillRect(player.getPosition()[0], player.getPosition()[1], player.getSize()[0], player.getSize()[1]);
	}

	const pageLoaded = () => {
		console.log("Hello");
		loadGameboard();
		draw();
	}

	return {pageLoaded};
})();
