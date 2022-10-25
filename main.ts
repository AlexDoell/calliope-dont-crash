function moveE2 () {
    if (e2) {
        if (e2.get(LedSpriteProperty.Y) == 4) {
            e2.delete()
        } else {
            e2.change(LedSpriteProperty.Y, 1)
        }
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    player.change(LedSpriteProperty.X, -1)
})
function moveE1 () {
    if (e1) {
        if (e1.get(LedSpriteProperty.Y) == 4) {
            e1.delete()
        } else {
            e1.change(LedSpriteProperty.Y, 1)
        }
    }
}
function moveE4 () {
    if (e4) {
        if (e4.get(LedSpriteProperty.Y) == 4) {
            e4.delete()
        } else {
            e4.change(LedSpriteProperty.Y, 1)
        }
    }
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    player.change(LedSpriteProperty.X, 1)
})
function moveE0 () {
    if (e0) {
        if (e0.get(LedSpriteProperty.Y) == 4) {
            e0.delete()
        } else {
            e0.change(LedSpriteProperty.Y, 1)
        }
    }
}
function moveE3 () {
    if (e3) {
        if (e3.get(LedSpriteProperty.Y) == 4) {
            e3.delete()
        } else {
            e3.change(LedSpriteProperty.Y, 1)
        }
    }
}
let rand = 0
let e3: game.LedSprite = null
let e0: game.LedSprite = null
let e4: game.LedSprite = null
let e1: game.LedSprite = null
let e2: game.LedSprite = null
let player: game.LedSprite = null
game.setLife(1)
player = game.createSprite(2, 4)
loops.everyInterval(1000, function () {
    rand = randint(0, 5)
    if (rand == 0) {
        if (!(e0) || e0.isDeleted()) {
            e0 = game.createSprite(0, 0)
        }
    } else if (rand == 1) {
        if (!(e1) || e1.isDeleted()) {
            e1 = game.createSprite(1, 0)
        }
    } else if (rand == 2) {
        if (!(e2) || e2.isDeleted()) {
            e2 = game.createSprite(2, 0)
        }
    } else if (rand == 3) {
        if (!(e3) || e3.isDeleted()) {
            e3 = game.createSprite(3, 0)
        }
    } else if (rand == 4) {
        if (!(e4) || e4.isDeleted()) {
            e4 = game.createSprite(4, 0)
        }
    }
})
loops.everyInterval(1000, function () {
    moveE0()
    moveE1()
    moveE2()
    moveE3()
    moveE4()
})
