const Snake = (position) => {
	var size = [15, 15];
	var velocity = 1;

	const getSize = () => size;
	const getVelocity = () => velocity;
	const getPosition = () => position;

	return {getSize, getVelocity, getPosition};
};