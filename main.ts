let サイコロ = 0
input.onGesture(Gesture.ThreeG, function () {
    while (!(input.isGesture(Gesture.ScreenUp))) {
        サイコロ = randint(1, 6)
        basic.showNumber(サイコロ)
    }
})
basic.forever(function () {
	
})
