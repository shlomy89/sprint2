
function renderCanvas() {
    gCtx.fillStyle = gCanvasColor
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMeme() {
    //render img
    var img = new Image()
    img.src = gImgs[gMeme.selectedImgId - 1].url

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        const oldLineIdx = gMeme.selectedLineIdx
        
        //render txt
        for (let i = 0; i < gMeme.lines.length; i++) {
            gMeme.selectedLineIdx = i
            drawText()
        }
        gMeme.selectedLineIdx = oldLineIdx
    }
}

function drawText() {
    var meme = getMeme()
    gCtx.beginPath()
    gCtx.textBaseline = 'middle'
    gCtx.textAlign = meme.align
    gCtx.font = `${meme.size}px ${meme.font}`
    gCtx.lineWidth = 2
    gCtx.strokeStyle = meme.stroke
    gCtx.strokeText(meme.txt, meme.linePosX, meme.linePosY)
    gCtx.fillStyle = meme.color
    gCtx.fillText(meme.txt, meme.linePosX, meme.linePosY)
    gCtx.closePath()
}

function onSetLineTxt(lineTxt) {
    setLineTxt(lineTxt)
    renderMeme()
}

function onSetFontColor(txtColor) {
    setFontColor(txtColor)
    renderMeme()
}

function onSetStrokeColor(strokeColor) {
    setStrokeColor(strokeColor)
    renderMeme()
}

function onChangeTxtSize(integer) {
    changeTxtSize(integer)
    renderMeme()
}

function onChangeAlign(alignDirection) {
    changeAlign(alignDirection)
    renderMeme()
}


function onSetTxtFont(txtFont) {
    setTxtFont(txtFont)
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onMoveLine(integer) {
    moveLine(integer)
    renderMeme()
}

function onRemoveLine() {
    removeLine()
    renderMeme()
}

function onSwitchLine() {
    switchLine()
}