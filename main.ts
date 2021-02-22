input.onButtonPressed(Button.A, function () {
    if (poj_pak == 0) {
        if (!(HOUR == 24 || HOUR == -1)) {
            HOUR += -1
            basic.showNumber(HOUR)
        } else if (HOUR == 24) {
            HOUR = 0
            basic.showNumber(HOUR)
        } else if (HOUR == -1) {
            HOUR = 23
            basic.showNumber(HOUR)
        }
    } else if (poj_pak == 1) {
        if (!(MINUTE == 60 || MINUTE == -1)) {
            MINUTE += -1
            basic.showNumber(MINUTE)
        } else if (MINUTE == 60) {
            MINUTE = 0
            basic.showNumber(MINUTE)
        } else if (MINUTE == -1) {
            MINUTE = 59
            basic.showNumber(MINUTE)
        }
    } else if (poj_pak == 2) {
        ScrolText.showString(
        "" + HOUR1 + ":" + MINUTE1,
        SCROLL_DIR.UP,
        SCROLL_ROTATE.SR_0,
        100
        )
    } else if (poj_pak == 3) {
    	
    } else if (poj_pak == 4) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    if (poj_pak == 0) {
        HOUR1 = HOUR
        poj_pak = 1
    } else if (poj_pak == 1) {
        MINUTE1 = MINUTE
        poj_pak = 2
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        start_everything = 1
    } else if (poj_pak == 2) {
        poj_pak = 3
    } else if (poj_pak == 3) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (poj_pak == 0) {
        if (!(HOUR == 24 || HOUR == -1)) {
            HOUR += 1
            basic.showNumber(HOUR)
        } else if (HOUR == 24) {
            HOUR = 0
            basic.showNumber(HOUR)
        } else if (HOUR == -1) {
            HOUR = 23
            basic.showNumber(HOUR)
        }
    } else if (poj_pak == 1) {
        if (!(MINUTE == 60 || MINUTE == -1)) {
            MINUTE += 1
            basic.showNumber(MINUTE)
        } else if (MINUTE == 60) {
            MINUTE = 0
            basic.showNumber(MINUTE)
        } else if (MINUTE == -1) {
            MINUTE = 59
            basic.showNumber(MINUTE)
        }
    } else if (poj_pak == 2) {
        let kcal_ = 0
        basic.showString("" + input.temperature() + "C" + "|" + ("Steps:" + steps_) + "|" + ("Kcal:" + kcal_) + "|")
    } else if (poj_pak == 3) {
    	
    } else if (false) {
    	
    }
})
let steps_ = 0
let MINUTE1 = 0
let HOUR1 = 0
let MINUTE = 0
let HOUR = 0
let start_everything = 0
let poj_pak = 0
poj_pak = 0
start_everything = 0
basic.forever(function () {
	
})
// Hodiny
basic.forever(function () {
    if (start_everything == 1) {
        if (!(HOUR1 == 24 || MINUTE1 == 60)) {
            basic.pause(60000)
            MINUTE1 += 1
        } else if (MINUTE1 == 60) {
            MINUTE1 = 0
            HOUR1 += 1
        } else if (HOUR1 == 24) {
            HOUR1 = 0
        }
    }
})
basic.forever(function () {
    led.setBrightness(input.lightLevel())
})
basic.forever(function () {
    if (start_everything == 1) {
        if (input.isGesture(Gesture.Shake)) {
            steps_ += 1
        }
    }
})
basic.forever(function () {
    let apps_ = 0
    if (apps_ == 1) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # # # . #
            `)
    } else if (apps_ == 2) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . . . #
            # # # # #
            `)
    } else if (apps_ == 3) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # # . .
            # # # # .
            # # # # #
            `)
    } else if (apps_ == 4) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            # # # # #
            `)
    } else if (apps_ == 5) {
        basic.showLeds(`
            . . . . .
            # # . . .
            . # # # #
            . . # # #
            . . # . #
            `)
    } else if (apps_ == 6) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                # # # # #
                . # # # .
                . . # . .
                `)
        }
    } else if (false) {
    	
    }
})
