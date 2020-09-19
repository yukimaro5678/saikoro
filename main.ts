let サイコロ = 0
input.onGesture(Gesture.ScreenDown, function () {
    サイコロ = randint(1, 6)
    basic.showNumber(サイコロ)
})
basic.forever(function () {
	
})
