input.onButtonPressed(Button.A, function () {
    if (poj_pak == 0) {
        if (!(HOUR == 24 || HOUR == -1)) {
            HOUR += -1
            ScrolText.showNumber(
            HOUR,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        } else if (HOUR == 24) {
            HOUR = 0
            ScrolText.showNumber(
            HOUR,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        } else if (HOUR == -1) {
            HOUR = 23
            ScrolText.showNumber(
            HOUR,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        }
    } else if (poj_pak == 1) {
        if (!(MINUTE == 60 || MINUTE == -1)) {
            MINUTE += -1
            ScrolText.showNumber(
            MINUTE,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        } else if (MINUTE == 60) {
            MINUTE = 0
            ScrolText.showNumber(
            MINUTE,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        } else if (MINUTE == -1) {
            MINUTE = 59
            ScrolText.showNumber(
            MINUTE,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        }
    } else if (poj_pak == 2) {
        ScrolText.showString(
        "" + HOUR1 + ":" + MINUTE1,
        SCROLL_DIR.UP,
        SCROLL_ROTATE.SR_0,
        100
        )
    } else if (poj_pak == 3) {
        apps_ += -1
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
        if (apps_ == 1) {
            bluetooth.uartWriteLine("app.sync.start")
        } else if (apps_ == 2) {
        	
        } else if (apps_ == 3) {
            basic.showNumber(steps_)
            basic.showLeds(`
                # # . . .
                # # . . .
                # # # . .
                # # # # .
                # # # # #
                `)
        } else if (apps_ == 4) {
            basic.showNumber(input.soundLevel())
            if (input.soundLevel() > 128) {
                basic.showString("Loud")
            } else if (input.soundLevel() < 128) {
                basic.showString("Quiet")
            } else if (input.soundLevel() == 128) {
                basic.showString("Loud")
            }
        } else if (apps_ == 5) {
            images.createBigImage(`
                . # # # . . . # . .
                . # # # . . # . . .
                . # # # . # # # # #
                . # # # . . # . . .
                . # # # . . . # . .
                `).scrollImage(1, 200)
        } else if (apps_ == 6) {
        	
        } else if (apps_ == 0) {
            poj_pak = 2
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (poj_pak == 0) {
        if (!(HOUR == 24 || HOUR == -1)) {
            HOUR += 1
            ScrolText.showNumber(
            HOUR,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        } else if (HOUR == 24) {
            HOUR = 0
            ScrolText.showNumber(
            HOUR,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        } else if (HOUR == -1) {
            HOUR = 23
            ScrolText.showNumber(
            HOUR,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        }
    } else if (poj_pak == 1) {
        if (!(MINUTE == 60 || MINUTE == -1)) {
            MINUTE += 1
            ScrolText.showNumber(
            MINUTE,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        } else if (MINUTE == 60) {
            MINUTE = 0
            ScrolText.showNumber(
            MINUTE,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        } else if (MINUTE == -1) {
            MINUTE = 59
            ScrolText.showNumber(
            MINUTE,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        }
    } else if (poj_pak == 2) {
        let kcal_ = 0
        basic.showString("" + input.temperature() + "C" + "|")
        basic.showLeds(`
            # # . . .
            # # . . .
            # # # . .
            # # # # .
            # # # # #
            `)
        basic.showString("" + steps_ + "|")
        basic.showLeds(`
            . # . . #
            . # . # .
            . # # . .
            . # . # .
            . # . . #
            `)
        basic.showString("" + kcal_ + "|")
    } else if (poj_pak == 3) {
        apps_ += 1
    } else if (false) {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    if (start_everything == 1) {
        steps_ += 1
    }
})
let apps_ = 0
let MINUTE1 = 0
let HOUR1 = 0
let MINUTE = 0
let HOUR = 0
let steps_ = 0
let start_everything = 0
let poj_pak = 0
bluetooth.startUartService()
poj_pak = 0
start_everything = 0
steps_ = 0
basic.forever(function () {
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
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (apps_ == 0 && poj_pak == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
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
	
})
// Lift to wake
basic.forever(function () {
    if (input.isGesture(Gesture.Shake) && input.isGesture(Gesture.LogoUp) && input.isGesture(Gesture.ScreenUp)) {
        ScrolText.showString(
        "" + HOUR1 + ":" + MINUTE1,
        SCROLL_DIR.UP,
        SCROLL_ROTATE.SR_0,
        100
        )
    }
})
