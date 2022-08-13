
function renderCanvas() {
    gCtx.fillStyle = gCanvasColor
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMeme(meme, elCanvas) {
    let ctx = elCanvas.getContext('2d')
    // ctx.globalCompositeOperation = 'source-over'

    //render img
    var img = new Image()
    img.src = gImgs[meme.selectedImgId - 1].url

    img.onload = () => {
        ctx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height)
        const oldLineIdx = meme.selectedLineIdx

        //render txt
        for (let i = 0; i < meme.lines.length; i++) {
            meme.selectedLineIdx = i
            drawText(meme.lines[i], elCanvas.getContext('2d'))
        }
        meme.selectedLineIdx = oldLineIdx
    }
}

function drawText(line, ctx) {
    var linePosX = line.linePosX
    if (line.align === 'left') {
        linePosX = 0
    } else if (line.align === 'right') {
        linePosX = 350
    }
    
    ctx.beginPath()
    ctx.textAlign = line.align
    ctx.font = `${line.size}px ${line.font}`
    ctx.lineWidth = 1
    ctx.strokeStyle = line.stroke
    ctx.strokeText(line.txt, linePosX, line.linePosY)
    ctx.fillStyle = line.color
    ctx.fillText(line.txt, linePosX, line.linePosY)
    ctx.closePath()
}

function onSetLineTxt(lineTxt) {
    setLineTxt(lineTxt)
    renderMeme(getMeme(), gElCanvas)
}

function onSetFontColor(txtColor) {
    setFontColor(txtColor)
    renderMeme(getMeme(), gElCanvas)
}

function onSetStrokeColor(strokeColor) {
    setStrokeColor(strokeColor)
    renderMeme(getMeme(), gElCanvas)
}

function onChangeTxtSize(integer) {
    changeTxtSize(integer)
    renderMeme(getMeme(), gElCanvas)
}

function onChangeAlign(alignDirection) {
    changeAlign(alignDirection)
    renderMeme(getMeme(), gElCanvas)
}

function onSetTxtFont(txtFont) {
    setTxtFont(txtFont)
    renderMeme(getMeme(), gElCanvas)
}

function onAddLine() {
    addLine()
    renderMeme(getMeme(), gElCanvas)
    document.querySelector('.line-input input').focus()
}

function onMoveLine(x, y) {
    moveLine(x, y)
    renderMeme(getMeme(), gElCanvas)
}

function onRemoveLine() {
    removeLine()
    renderMeme(getMeme(), gElCanvas)
}

function onSwitchLine() {
    switchLine()
}
