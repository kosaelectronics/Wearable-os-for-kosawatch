input.onButtonPressed(Button.A, function () {
    if (main_node_ == 0) {
        if (!(HOUR_ == 24 || HOUR_ == -1)) {
            HOUR_ += -1
            ScrolText.showNumber(
            HOUR_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        } else if (HOUR_ == 24) {
            HOUR_ = 0
            ScrolText.showNumber(
            HOUR_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        } else if (HOUR_ == -1) {
            HOUR_ = 23
            ScrolText.showNumber(
            HOUR_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        }
    } else if (main_node_ == 1) {
        if (!(MINUTE_ == 60 || MINUTE_ == -1)) {
            MINUTE_ += -1
            ScrolText.showNumber(
            MINUTE_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        } else if (MINUTE_ == 60) {
            MINUTE_ = 0
            ScrolText.showNumber(
            MINUTE_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        } else if (MINUTE_ == -1) {
            MINUTE_ = 59
            ScrolText.showNumber(
            MINUTE_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        }
    } else if (main_node_ == 2) {
        ScrolText.showString(
        "" + HOUR1_ + ":" + MINUTE1_,
        SCROLL_DIR.UP,
        SCROLL_ROTATE.SR_0,
        100
        )
    } else if (main_node_ == 3) {
        apps_ += -1
    } else if (main_node_ == 4) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    if (main_node_ == 0) {
        HOUR1_ = HOUR_
        main_node_ = 1
    } else if (main_node_ == 1) {
        MINUTE1_ = MINUTE_
        main_node_ = 2
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        start_everything_ = 1
    } else if (main_node_ == 2) {
        main_node_ = 3
    } else if (main_node_ == 3) {
        if (apps_ == 1) {
            bluetooth.uartWriteLine("app.sync.start;")
        } else if (apps_ == 2) {
            if (compass_ == 0) {
                input.calibrateCompass()
                compass_ = 1
            } else if (compass_ == 1) {
                compass_ = 2
            }
        } else if (apps_ == 3) {
            bluetooth.uartWriteValue("steps_", steps_)
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
            bluetooth.uartWriteString("app.store.open;")
            images.createBigImage(`
                . # # # . . . # . .
                . # # # . . # . . .
                . # # # . # # # # #
                . # # # . . # . . .
                . # # # . . . # . .
                `).scrollImage(1, 200)
        } else if (apps_ == 6) {
            beatbeat_ = 1
            start_heartbeat_ = 1
            basic.pause(60000)
            basic.showNumber(hearthbeatnumber_)
            bluetooth.uartWriteValue("hearthbeat", hearthbeatnumber_)
            for (let index = 0; index < 4; index++) {
                basic.showIcon(IconNames.SmallHeart)
                basic.showIcon(IconNames.Heart)
            }
            start_heartbeat_ = 0
            beatbeat_ = 0
        } else if (apps_ == 0) {
            main_node_ = 2
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (main_node_ == 0) {
        if (!(HOUR_ == 24 || HOUR_ == -1)) {
            HOUR_ += 1
            ScrolText.showNumber(
            HOUR_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        } else if (HOUR_ == 24) {
            HOUR_ = 0
            ScrolText.showNumber(
            HOUR_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        } else if (HOUR_ == -1) {
            HOUR_ = 23
            ScrolText.showNumber(
            HOUR_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            90
            )
        }
    } else if (main_node_ == 1) {
        if (!(MINUTE_ == 60 || MINUTE_ == -1)) {
            MINUTE_ += 1
            ScrolText.showNumber(
            MINUTE_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        } else if (MINUTE_ == 60) {
            MINUTE_ = 0
            ScrolText.showNumber(
            MINUTE_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        } else if (MINUTE_ == -1) {
            MINUTE_ = 59
            ScrolText.showNumber(
            MINUTE_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        }
    } else if (main_node_ == 2) {
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
    } else if (main_node_ == 3) {
        apps_ += 1
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    if (start_everything_ == 1) {
        steps_ += 1
        if (start_heartbeat_ == 1) {
            hearthbeat_ = true
            hearthbeatnumber_ += 1
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (compass_ == 2) {
        compass_ = 1
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    }
})
let trace2_: Image = null
let trace1_: Image = null
let hearthbeat_ = false
let hearthbeatnumber_ = 0
let compass_ = 0
let apps_ = 0
let MINUTE1_ = 0
let HOUR1_ = 0
let MINUTE_ = 0
let HOUR_ = 0
let beatbeat_ = 0
let start_heartbeat_ = 0
let steps_ = 0
let start_everything_ = 0
let main_node_ = 0
bluetooth.startUartService()
main_node_ = 0
start_everything_ = 0
steps_ = 0
start_heartbeat_ = 0
beatbeat_ = 0
basic.forever(function () {
    if (compass_ == 1 && apps_ == 2) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (hearthbeat_) {
        hearthbeat_ = false
        trace1_.scrollImage(1, 200)
        trace2_.scrollImage(1, 200)
    }
})
basic.forever(function () {
    if (start_everything_ == 1) {
        if (!(HOUR1_ == 24 || MINUTE1_ == 60)) {
            basic.pause(60000)
            MINUTE1_ += 1
        } else if (MINUTE1_ == 60) {
            MINUTE1_ = 0
            HOUR1_ += 1
        } else if (HOUR1_ == 24) {
            HOUR1_ = 0
        }
    }
})
basic.forever(function () {
    if (apps_ == 1) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # # # . #
            `)
    } else if (apps_ == 2 && (compass_ == 0 || compass_ == 1)) {
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
    } else if (apps_ == 6 && beatbeat_ == 0) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (apps_ == 0 && main_node_ == 3) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (apps_ == 7) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            . # # # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (compass_ == 2) {
        if (input.compassHeading() >= 23 && input.compassHeading() < 68) {
            basic.showLeds(`
                . . # # #
                . . . . #
                . . # . #
                . # . . .
                # . . . .
                `)
        } else if (input.compassHeading() < 113) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # . #
                . . . # .
                . . # . .
                `)
        } else if (input.compassHeading() < 158) {
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . #
                . . . . #
                . . # # #
                `)
        } else if (input.compassHeading() < 203) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # . # .
                . . # . .
                `)
        } else if (input.compassHeading() < 248) {
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                # . . . .
                # # # . .
                `)
        } else if (input.compassHeading() < 293) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # . # # #
                . # . . .
                . . # . .
                `)
        } else if (input.compassHeading() < 338) {
            basic.showLeds(`
                # # # . .
                # . . . .
                # . # . .
                . . . # .
                . . . . #
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
    } else if (compass_ == 1) {
    	
    }
})
basic.forever(function () {
    led.setBrightness(input.lightLevel())
})
basic.forever(function () {
    let lift_to_wake_ = 0
    if (lift_to_wake_ == 1) {
        if (input.isGesture(Gesture.Shake) && input.isGesture(Gesture.LogoUp) && input.isGesture(Gesture.ScreenUp)) {
            ScrolText.showString(
            "" + HOUR1_ + ":" + MINUTE1_,
            SCROLL_DIR.UP,
            SCROLL_ROTATE.SR_0,
            100
            )
        }
    } else {
    	
    }
})
basic.forever(function () {
    trace1_ = images.createImage(`
        # . . . .
        # . . . .
        # . . . .
        # # . . .
        # # # # #
        `)
    trace2_ = images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
})
