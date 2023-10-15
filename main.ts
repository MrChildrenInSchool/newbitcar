function comment (str:string){}
function runsafely (speed: number) {
    respeed = Math.constrain(speed, 0, maxspeed)
    if(BitCar.linesensor(IRLineSensor.left)&&BitCar.linesensor(IRLineSensor.right)){
        comment("右も左にも反応しているため、直進")
        runstraghtsafely()
    }

}
function runstraight (speed: number) {
    respeed = Math.constrain(speed, 0, maxspeed)
    BitCar.move(respeed, respeed)
}
function runstraghtsafely () {
    runstraight(5 + 5 * BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm))
}
function runstraightsafely_uselinefollow () {
    runsafely(10 + 5 * BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm))
}
let respeed = 0
let maxspeed = 0
maxspeed = 1
