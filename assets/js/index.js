// Game Variables
const snakeEl = document.getElementById("snake");
let direction = "R";
let score = 0;
let movementSpeedMS = 250;
let snakeCoords = {
    left: 0,
    top: 0
}
let snakeHeadWidth = 30;

const snakeBump = (x, y) => {
    // Wall Bump
    const horizontalWallBump = x < 0 || x + snakeHeadWidth > window.innerWidth;
    const verticalWallBump = y < 0 || y + snakeHeadWidth > window.innerHeight;
    // Snake Bump

    return horizontalWallBump || verticalWallBump
};

const move = () => {
    switch (direction) {
        case "L":
            if (snakeBump(snakeCoords.left - 10, snakeCoords.top)) {
                return;
            } else {
                snakeCoords.left -= 10
                snakeEl.style.left = `${snakeCoords.left}px`
                break;
            }
        case "R":
            if (snakeBump(snakeCoords.left + 10, snakeCoords.top)) {
                return;
            } else {
                snakeCoords.left += 10
                snakeEl.style.left = `${snakeCoords.left}px`
                break;
            }
        case "U":
            if (snakeBump(snakeCoords.left, snakeCoords.top - 10)) {
                return;
            } else {
                snakeCoords.top -= 10
                snakeEl.style.top = `${snakeCoords.top}px`
                break;
            }
        default:
            if (snakeBump(snakeCoords.left, snakeCoords.top + 10)) {
                return;
            } else {
                snakeCoords.top += 10
                snakeEl.style.top = `${snakeCoords.top}px`
                break;
            }
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