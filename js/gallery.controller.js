
var gElCanvas
var gCtx


function onInit() {
    gElCanvas = document.querySelector('.meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
    renderCanvas()
}

function renderGallery() {
    let strHTML = gImgs.map(img => `
    <div class="img img1">
    <img onclick="onImgSelect('${img.id}')" src="${img.url}">
    </div>
    `
    )
document.querySelector('.gallery-grid').innerHTML = strHTML.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
}

function onBackToGallery() {
    backToGallery()
    renderMeme()
}