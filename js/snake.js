const Snake = () => {
	var size = [15, 15];
	var velocity = 1;
	var position = 0;

	const setPosition = (newPosition) => {
		position = newPosition;
	}
	const getSize = () => size;
	const getVelocity = () => velocity;
	const getPosition = () => position;

	return {getSize, getVelocity, getPosition, setPosition};
};
