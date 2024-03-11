// Game Variables
const snakeEl = document.getElementById("snake");
let direction = "R";
let score = 0;
let movementSpeedMS = 250;
let snakeCoords = {
    left: 0,
    top: 0
}

const move = () => {
    switch (direction) {
        case "L":
            snakeCoords.left -= 10
            snakeEl.style.left = `${snakeCoords.left}px`
            break;
        case "R":
            snakeCoords.left += 10
            snakeEl.style.left = `${snakeCoords.left}px`
            break;
        case "U":
            snakeCoords.top -= 10
            snakeEl.style.top = `${snakeCoords.top}px`
            break;
        default:
            snakeCoords.top += 10
            snakeEl.style.top = `${snakeCoords.top}px`
            break;
    }
}

const changeDirection = (e) => {
    switch (e.key) {
        case "ArrowLeft":
            direction = "L"
            break;
        case "ArrowRight":
            direction = "R"
            break;
        case "ArrowUp":
            direction = "U"
            break;
        default:
            direction = "D"
            break;
    }

    return;
}


addEventListener("keydown", changeDirection)
setInterval(move, movementSpeedMS);