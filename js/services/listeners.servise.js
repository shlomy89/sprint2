function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

const movingElement = {
    idx: 0,
    isMoving: true,
}

function onDown(ev) {
    ev.preventDefault()
    const pos = getEvPos(ev)

}

function onMove(ev) {
    const pos = getEvPos(ev)
}

function onUp(ev) {
    const pos = getEvPos(ev)
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }

    return pos
}




// for (var i = 0; i < gMeme.lines.length; i++) {
//     let addSpacing = 0
//     if (i - 1 >= 0) {
//         addSpacing = gMeme.lines.slice(0, i)
//             .map(line => line.size)
//             .reduce((prev, current) => prev + current, 0)
//     }

//     var abs = Math.abs((gMeme.lines[i].linePosY + addSpacing) - pos.y)

//     if (abs < gMeme.lines[i].size + 10) {
//         movingElement.idx = i
//         movingElement.isMoving = true
//         console.log(movingElement)
//         return
//     }
// }


// if (line.align === 'left') {
//     return (clickedPos.x >= linePos.x && clickedPos.x <= linePos.x + line.width
//         && clickedPos.y >= linePos.y - line.height && clickedPos.y <= linePos.y)
// }
// if (line.align === 'center') {
//     return (clickedPos.x <= linePos.x + line.width / 2 && clickedPos.x >= linePos.x - line.width / 2
//         && clickedPos.y <= linePos.y + line.height / 2 && clickedPos.y >= linePos.y - line.height / 2)
// }
// if (line.align === 'right') {
//     return (clickedPos.x <= linePos.x && clickedPos.x >= linePos.x - line.width
//         && clickedPos.y >= linePos.y - line.height && clickedPos.y >= linePos.y)
// }
