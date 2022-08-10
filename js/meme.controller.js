
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
        gCtx.font = `${meme.size}px impact`;
        gCtx.fillStyle = meme.color;
        gCtx.fillText(gMeme.lines[meme.lineIdx].txt, 25, 25);
    }
}


