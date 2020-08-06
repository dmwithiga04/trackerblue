radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
radio.setGroup(1)
radio.setTransmitPower(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
})
