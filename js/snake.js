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
		if(direction === "Right"){
			let x = this.position[0];
			x++;
			let newPosition = [x, this.position[1]];
			this.position = newPosition;
		}
	}
}
