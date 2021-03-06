const Gameboard = (() => {
	var size = [640, 480];
	var style = "border: #000 2px solid";
	var myCanvas;
	var myContext;
	var player;
	var fruit;
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

	const loadFruit = () => {
		fruit = new Snake();
		fruit.setPosition(getRandomPositon(fruit.getSize()));
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

	/* We need to check wether or no the player is the fruit's coordinates */
	const detectCollision = () => {
		for(let fruitXCoord = fruit.getPosition()[0];
			fruitXCoord < fruit.getPosition()[0] + fruit.getSize()[0];
			fruitXCoord++){
			for(let fruitYCoord = fruit.getPosition()[1];
				fruitYCoord < fruit.getPosition()[1] + fruit.getSize()[1];
				fruitYCoord++){
				if((player.getPosition()[0] === fruitXCoord &&
				   player.getPosition()[1] === fruitYCoord) ||
				   (player.getPosition()[0] + player.getSize()[0] === fruitXCoord &&
					player.getPosition()[1] + player.getSize()[1] === fruitYCoord)){
					player.total++;
					loadFruit();
				}
			}
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
		/* Update position. Moving to the right. */
		player.move(direction);
		detectCollision();

		myContext.fillStyle = "#333333";

		for(let i = 0; i < player.tail.length; i++){
			console.log(player.tail[i].x);
			console.log(player.tail[i].y);
			myContext.fillRect(player.tail[i].x, player.tail[i].y,
							   player.getSize()[0], player.getSize()[1]);
		}

		myContext.fillRect(player.getPosition()[0],
						   player.getPosition()[1],
						   player.getSize()[0],
						   player.getSize()[1]);
	}

	const drawFruit = () => {
		myContext.fillStyle = "#FF0000";
		myContext.fillRect(fruit.getPosition()[0],
						   fruit.getPosition()[1],
						   fruit.getSize()[0],
						   fruit.getSize()[1]);
	}

	const draw = () => {
		/* Check game over. */
		if(isGameover()){
			alert("GAME OVER");
			document.location.reload();
		}
		myContext.clearRect(0, 0, myCanvas.width, myCanvas.height);
		drawFruit();
		drawPlayer();
	}

	const pageLoaded = () => {
		loadGameboard();
		loadPlayer();
		loadFruit();
		setInterval(draw, 10);
	}

	return {pageLoaded};
})();
