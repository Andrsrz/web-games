class Snake{
	constructor(position){
		this.size = [15, 15];
		this.velocity = 1;
		this.position = position ? position : [];
	}

	setPosition(newPosition){
		this.position = newPosition;
	}

	getSize(){
		return this.size;
	}

	getVelocity(){
		return this.velocity;
	}

	getPosition(){
		return this.position;
	}

	move(direction){
		let x = 0;
		let y = 0;
		let newPosition = [];
		if(direction === "Right"){
			x = this.position[0] + this.velocity;
			let newPosition = [x, this.position[1]];
			this.position = newPosition;
		}else if(direction === "Left"){
			x = this.position[0] - this.velocity;
			newPosition = [x, this.position[1]];
			this.position = newPosition;
		}else if(direction === "Up"){
			y = this.position[1] - this.velocity;
			newPosition = [this.position[0], y];
			this.position = newPosition;
		}else if(direction === "Down"){
			y = this.position[1] + this.velocity;
			newPosition = [this.position[0], y];
			this.position = newPosition;
		}
	}
}
