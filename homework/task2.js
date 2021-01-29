function Robot() {
	this.name;
	this.act;
}

Robot.prototype.construct = function Robot(name, act) {
	this.name = name;
	this.act = act;
}

Robot.prototype.construct("Robot", "just working");

Robot.prototype.work = function work() {
	console.log("I " + this.name + " - I " + this.act + "!");
}

function CoffeeRobot() {}
CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = CoffeeRobot;

CoffeeRobot.prototype.construct("CoffeeRobot", "just brewing coffee");

function RobotCooker() {}
RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;

RobotCooker.prototype.construct("RobotCooker", "just cooking");

function RobotDanser() {}
RobotDanser.prototype = Object.create(Robot.prototype);
RobotDanser.prototype.constructor = RobotDanser;

RobotDanser.prototype.construct("RobotDanser", "just dancing");

let robot = new Robot();
let coffeeRobot = new CoffeeRobot();
let robotDanser = new RobotDanser();
let robotCooker = new RobotCooker();

robot.work();
coffeeRobot.work();
robotDanser.work();
robotCooker.work();

console.log();

let robotArray = [];
robotArray[0] = robot;
robotArray[1] = coffeeRobot;
robotArray[2] = robotDanser;
robotArray[3] = robotCooker;

for (let i = 0; i < robotArray.length; i++) {
	robotArray[i].work();
}