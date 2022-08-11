
function renderCanvas() {
    gCtx.fillStyle = gCanvasColor
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMeme() {
    var meme = getMeme()
    //render img
    var img = new Image()
    img.src = meme.img

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

        //render txt
        gCtx.textAlign = meme.align;
        gCtx.font = `${meme.size}px ${meme.font}`;
        gCtx.fillStyle = meme.color;
        gCtx.fillText(meme.txt, gElCanvas.width / 2, 30);
    }
}

function onSetLineTxt(lineTxt) {
    setLineTxt(lineTxt)
    renderMeme()
}

function onSetTxtColor(txtColor) {
    setTxtColor(txtColor)
    renderMeme()
}

function onChangeTxtSize(increase) {
    changeTxtSize(increase)
    renderMeme()
}

function onChangeAlign(alignDirection) {
    changeAlign(alignDirection)
    renderMeme()
}


// function onSetTxtFont(txtFont) {
//     setTxtFont(txtFont)
//     renderMeme()
// }