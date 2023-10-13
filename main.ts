function runstraight (speed: number) {
    let straightmaxspeed = 0
    BitCar.move(Math.constrain(rightmortorpawer * speed, 0, straightmaxspeed), Math.constrain(leftmortorpawer * speed, 0, straightmaxspeed))
}
let msnow = 0
let leftmortorpawer = 0
let rightmortorpawer = 0
rightmortorpawer = 1
leftmortorpawer = 1
basic.forever(function () {
    // ずっと稼働
    msnow = control.millis()
})
