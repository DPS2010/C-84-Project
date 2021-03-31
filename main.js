canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
car1x = 100
car1y = 100
car1 = "car1.png"
car2x = 100
car2y = 200
car2 = "Car2.jpeg"
background = "racing.jpg"

function add () {
    bg = new Image()
    bg.src = background
    bg.onload = uploadBackground

    car1img = new Image()
    car1img.src = car1
    car1img.onload = uploadcar1

    car2img = new Image()
    car2img.src = car2
    car2img.onload = uploadcar2
}
function uploadBackground () {
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
}

function uploadcar1 () {
    ctx.drawImage(car1img, car1x, car1y, 120, 75)
}

function uploadcar2 () {
    ctx.drawImage(car2img, car2x, car2y, 120, 75)
}
window.addEventListener("keydown", kd)

function kd (e) {
    x = e.keyCode
    console.log(x)

    if (x == 37) {
        left()
    }
    if (x == 38) {
        up()
    }
    if (x == 39) {
        right()
    }
    if (x == 40) {
        down()
    }

    if (x == 83) {
        down1()
    }

    if (x == 68) {
        right1()
    }

    if (x == 87) {
        up1()
    }

    if (x == 65) {
        left1()
    }
}