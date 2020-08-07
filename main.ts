radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        for (let index = 0; index < 1; index++) {
            basic.showString("CLOSE!")
        }
        basic.clearScreen()
    }
    if (receivedNumber == 3) {
        for (let index = 0; index < 2; index++) {
            basic.showString("Item Found !!!")
        }
        basic.clearScreen()
    }
})
radio.setGroup(1)
radio.setTransmitPower(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
})
