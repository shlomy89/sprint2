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
    const pos = getEvPos(ev)

    for (var i=0; i<gMeme.lines.length; i++) {
        let addSpacing = 0
        if (i-1 >= 0) {
            addSpacing = gMeme.lines.slice(0, i)
                .map(line => line.size)
                .reduce((prev, current) => prev + current, 0)
        }
        
        var abs = Math.abs((gMeme.lines[i].linePosY + addSpacing) - pos.y)
        
        if (abs < gMeme.lines[i].size + 10) {
            movingElement.idx = i
            movingElement.isMoving = true
            console.log(movingElement)
            return
        }
    }
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
