class Car {
	constructor(speed) {
		this.speed = speed;
	}
	drive = (newSpeed) => this.speed = newSpeed;
}

// let car = new Car();
// car.drive(0);
// console.log(car);

// car.drive(10);
// console.log(car);

// car.drive(50);
// console.log(car);

// car.drive(100);
// console.log(car);

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
