function runstraight (speed: number) {
    BitCar.move(rightmortorpawer * speed, leftmortorpawer * speed)
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
