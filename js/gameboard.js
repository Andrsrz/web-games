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

	const getRandomPositon = (playerSize) => {
		let position = [];
		/* Fill position array */
		for(let i = 0; i < 2; i++){
			let min = Math.ceil(0);
			let max = Math.floor(size[i] - playerSize[i]);
			position.push(Math.floor(Math.random() * (max - min)) + min);
		}

		return position;
	}

	const loadPlayer = () => {
		player = new Snake();
		player.setPosition(getRandomPositon(player.getSize()));
	}

	const draw = () => {
		myContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
		myContext.fillRect(player.getPosition()[0],
						   player.getPosition()[1],
						   player.getSize()[0],
						   player.getSize()[1]);
		/* Update position. Moving to the right. */
		player.move("Right");
	}

	const pageLoaded = () => {
		loadGameboard();
		loadPlayer();
		// setInterval(draw, 10);
	}

	return {pageLoaded};
})();
