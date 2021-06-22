import {GameView, clickToTail, canvas} from "./gameview.js"
import {move} from "./game.js"

const initialState = [
    [0, 2, 3],
    [1, 5, 6],
    [4, 7, 8]]

const endGameState = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]]

let s1 = initialState
const GameViewEx = new GameView(s1)

canvas.addEventListener('click', moveView)


function moveView(event)
{
    const [i, j] = clickToTail(event.offsetX, event.offsetY)
    s1 = move(s1, i, j)
    new GameView(s1)
    if (isEndGame()) {
        GameViewEx.drawEndGame()
        endGame()
    }
}

function isEndGame () {
    return JSON.stringify(s1) === JSON.stringify(endGameState)
}

function clickRestartGame (event) {
    const x = event.offsetX
    const y = event.offsetY

    if (x > 100 && x < 200 && y > 200 && y < 240) {
        window.location.reload()
    }
}

function endGame () {
    canvas.removeEventListener('click', moveView)
    canvas.addEventListener('click', clickRestartGame)
}