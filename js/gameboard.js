const Gameboard = (() => {
	var size = [640, 480];
	var style = "border: #000 2px solid";
	var myCanvas;
	var myContext;
	var player;
	var direction = "Right";

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

	const isGameover = () => {
		if(player.getPosition()[0] > myCanvas.width ||
		   player.getPosition()[0] < 0 ||
		   player.getPosition()[1] > myCanvas.height ||
		   player.getPosition()[1] < 0){
			return "Game Over";
		}else{
			return false;
		}
	}

	const keyDownHandler = (e) => {
		if(e.key == "Right" || e.key == "ArrowRight") {
			direction = "Right";
		}else if(e.key == "Left" || e.key == "ArrowLeft") {
			direction = "Left";
		}else if(e.key == "Up" || e.key == "ArrowUp") {
			direction = "Up";
		}else if(e.key == "Down" || e.key == "ArrowDown") {
			direction = "Down";
		}
	}

	document.addEventListener("keydown", keyDownHandler, false);

	const drawPlayer = () => {
		myContext.fillRect(player.getPosition()[0],
						   player.getPosition()[1],
						   player.getSize()[0],
						   player.getSize()[1]);
		/* Update position. Moving to the right. */
		player.move(direction);
	}

	const draw = () => {
		/* Check game over. */
		if(isGameover()){
			alert("GAME OVER");
			document.location.reload();
		}
		myContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
		drawPlayer();
	}

	const pageLoaded = () => {
		loadGameboard();
		loadPlayer();
		setInterval(draw, 10);
	}

	return {pageLoaded};
})();
