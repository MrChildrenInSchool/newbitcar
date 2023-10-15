function runsafely (speed: number) {
    respeed = Math.constrain(speed, 0, maxspeed)
    left = BitCar.linesensor(IRLineSensor.left)
    right = BitCar.linesensor(IRLineSensor.right)
    if (left && right) {
        runstraghtsafely()
    } else if (left) {
        move(Math.constrain(5 * BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm), 0, maxspeedturning * leftpawer), Math.constrain(BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm), 0, 3))
    } else if (right) {
        move(Math.constrain(BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm), 0, 3), 5 * Math.constrain(BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm), 0, 10))
    } else {
        runstraghtsafely()
    }
}
function runstraight (speed: number) {
    respeed = Math.constrain(speed, 0, maxspeed)
    move(respeed, respeed)
}
function runstraghtsafely () {
    runstraight(5 * BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm))
}
function runstraightsafely_uselinefollow () {
    runsafely(5 * BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm))
}
function comment (str: string) {
	
}
function move (leftspeed: number, rightspeed: number) {
    BitCar.move(leftpawer * leftspeed, rightpawer * rightspeed)
}
let right = false
let left = false
let respeed = 0
let maxspeed = 0
let leftpawer = 0
let rightpawer = 0
let maxspeedturning = 0
maxspeedturning = 1
rightpawer = 1
leftpawer = 1
maxspeed = 1
