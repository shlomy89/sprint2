
function addListeners() {

    addMouseListeners()
    addTouchListeners()

    // window.addEventListener('resize', () => {
    //     resizeCanvas()
    //     renderCanvas()
    // })
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
        
        // console.log('gMeme.lines[i].linePosY:', gMeme.lines[i].linePosY);
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
    // console.log('pos:', pos);
}

function onUp(ev) {
    const pos = getEvPos(ev)
    // console.log('pos:', pos);
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }

    // if (gTouchEvs.includes(ev.type)) {
    //     ev.preventDefault()
    //     ev = ev.changedTouches[0]
    //     pos = {
    //         x: ev.pageX - ev.target.offsetLeft,
    //         y: ev.pageY - ev.target.offsetTop
    //     }
    // }
    return pos
}
