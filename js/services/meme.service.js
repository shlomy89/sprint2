
const gCanvasColor = '#ffffff'
const STORAGE_KEY = 'memesDB'
var gSavedMemes = []

// var gElInputLine = document.querySelector('.line-input input').value

var gImgs = [
    { id: 1, url: 'img/meme-imgs(square)/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'img/meme-imgs(square)/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'img/meme-imgs(square)/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'img/meme-imgs(square)/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'img/meme-imgs(square)/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'img/meme-imgs(square)/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'img/meme-imgs(square)/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'img/meme-imgs(square)/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'img/meme-imgs(square)/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'img/meme-imgs(square)/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'img/meme-imgs(square)/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'img/meme-imgs(square)/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'img/meme-imgs(square)/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'img/meme-imgs(square)/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'img/meme-imgs(square)/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'img/meme-imgs(square)/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'img/meme-imgs(square)/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'img/meme-imgs(square)/18.jpg', keywords: ['funny', 'cat'] }
]


var gMeme = {
    selectedImgId: 2,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 30,
            align: 'center',
            color: 'blue',
            font: 'impact',
            stroke: 'red',
            linePosX: 175,
            linePosY: 30
        }
    ]
}

function getMeme() {
    const { lines } = gMeme
    var meme = {
        img: gImgs[gMeme.selectedImgId - 1].url,
        lineIdx: gMeme.selectedLineIdx,
        txt: lines[gMeme.selectedLineIdx].txt,
        size: lines[gMeme.selectedLineIdx].size,
        align: lines[gMeme.selectedLineIdx].align,
        color: lines[gMeme.selectedLineIdx].color,
        font: lines[gMeme.selectedLineIdx].font,
        stroke: lines[gMeme.selectedLineIdx].stroke,
        linePosX: lines[gMeme.selectedLineIdx].linePosX,
        linePosY: lines[gMeme.selectedLineIdx].linePosY
    }
    return meme
}

function cleargMeme() {
        gMeme.selectedImgId = 2
        gMeme.selectedLineIdx = 0
    for (let i = 0; i < gMeme.lines.length; i++) {
        gMeme.selectedLineIdx = i
        gMeme.lines[i].txt= ''
        gMeme.lines[i].size = 30
        gMeme.lines[i].align = 'center'
        gMeme.lines[i].color = 'blue'
        gMeme.lines[i].font = 'impact'
        gMeme.lines[i].stroke = 'red'
        gMeme.lines[i].linePosX = '175'
        gMeme.lines[i].linePosY = '30'
    }
}

function setLineTxt(memeLineTxt) {
    const { lines } = gMeme
    lines[gMeme.selectedLineIdx].txt = memeLineTxt
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    var elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = "none"
    var elMemeEditor = document.querySelector('.meme-editor-container')
    elMemeEditor.classList.remove('hide')
    renderMeme()
}

function setFontColor(txtColor) {
    gMeme.lines[gMeme.selectedLineIdx].color = txtColor
}

function setStrokeColor(strokeColor) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = strokeColor
}

function setTxtFont(txtFont) {
    gMeme.lines[gMeme.selectedLineIdx].font = txtFont
}

function changeTxtSize(integer) {
    gMeme.lines[gMeme.selectedLineIdx].size += integer
}

function changeAlign(alignDirection) {
    gMeme.lines[gMeme.selectedLineIdx].align = alignDirection
}

function downloadMeme(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-meme'
}

function moveLine(y) {
    const { lines } = gMeme
    // console.log('x, y:', x, y);

    // if (!x) {
    lines[gMeme.selectedLineIdx].linePosY += y
    // x = lines[gMeme.selectedLineIdx].linePosX
    // }
    // if (!y) {
    // lines[gMeme.selectedLineIdx].linePosX += x
    // y = lines[gMeme.selectedLineIdx].linePosY
    // }
}

function addLine() {
    if (document.querySelector('.line-input input').value === '') return
    const newLine = {
        txt: '',
        size: 30,
        align: 'center',
        color: 'blue',
        font: 'impact',
        stroke: 'red',
        linePosX: 175,
        linePosY: 320
    }
    gMeme.selectedLineIdx = gMeme.lines.length
    gMeme.lines.push(newLine)
    document.querySelector('.line-input input').value = ''
}

function removeLine() {
    const { lines } = gMeme
    if (gMeme.lines.length === 1) {
        document.querySelector('.line-input input').value = ''
        lines[gMeme.selectedLineIdx].txt = ''
        return
    }
    lines.splice(-1)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

var switchLineDirection = 'down'

function switchLine() {
    var curLineTxt = gMeme.lines[gMeme.selectedLineIdx].txt
    if (gMeme.lines.length < 2) return

    if (gMeme.selectedLineIdx > 0 && switchLineDirection === 'down') {
        gMeme.selectedLineIdx--
        document.querySelector('.line-input input').value = curLineTxt

    } else if (gMeme.selectedLineIdx === 0 || switchLineDirection === 'up') {
        switchLineDirection = 'up'
        gMeme.selectedLineIdx++
        document.querySelector('.line-input input').value = curLineTxt

        if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
            switchLineDirection = 'down'
        }
    }
}


function _saveToStorage() {
    saveToStorage(STORAGE_KEY, gSavedMemes)
}

function _loadFromStorage() {
    loadFromStorage(STORAGE_KEY)
}
