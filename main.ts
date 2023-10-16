function runsafely() {
    left = BitCar.linesensor(IRLineSensor.left)
    right = BitCar.linesensor(IRLineSensor.right)
    if (stopms > 10000) {
        avoid(["right", "left"][randint(0, 1)])
    } else {
        if (BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm) <= 0) {
            if (stopms == 0) {
                stopstart = input.runningTimeMicros()
            }
            stopms = input.runningTimeMicros() - stopstart
        } else {
            stopms = 0
            if (left && right) {
                runstraghtsafely()
            } else if (left) {
                move(Math.constrain(5 * BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm), 0, maxspeedturning * leftpawer), Math.constrain(BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm), 0, 3))
            } else if (right) {
                move(Math.constrain(BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm), 0, 3), 5 * Math.constrain(BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm), 0, maxspeedturning * rightpawer))
            } else {
                runstraghtsafely()
            }
        }
    }
}
function runstraight(speed: number) {
    respeed = Math.constrain(speed, 0, maxspeed)
    move(respeed, respeed)
}
// あとは色やれたら完成かな
// あ、避けるのも必要だった。。
function avoid(direction: string) {
    comment("途中です。。")
    distance = BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm)
    if (direction == "right") {
            move(10,5)
            runstraghtsafely()
            move(5,10)
            runstraghtsafely()
        for(let i = 0;;){}

    } else if (direction == "left") {

    } else {
        comment("エラー処理")
    }
}
function runstraghtsafely() {
    runstraight(5 * BitCar.grove_ultrasonic_v2(GrovePin.P12, DistanceUnit.cm))
}
function error(err: string) {
    comment("エラー処理")
}
function comment(str: string) {

}
function move(leftspeed: number, rightspeed: number) {
    BitCar.move(leftpawer * leftspeed, rightpawer * rightspeed)
}
function main() {
    runsafely()
}
let distance = 0
let respeed = 0
let stopstart = 0
let stopms = 0
let right = false
let left = false
let maxspeed = 0
let leftpawer = 0
let rightpawer = 0
let maxspeedturning = 0
comment("GPS機能が欲しかったの。。")
maxspeedturning = 1
rightpawer = 1
leftpawer = 1
maxspeed = 1
basic.forever(function () {
    main()
})
