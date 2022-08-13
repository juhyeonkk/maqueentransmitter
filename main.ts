radio.setGroup(1)
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    radio.sendValue("x", Math.round(input.acceleration(Dimension.X) / 10))
    radio.sendValue("y", Math.round(input.acceleration(Dimension.Y) / 10))
})
