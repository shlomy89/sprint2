
const gCanvasColor = '#ffffff'
const STORAGE_KEY = 'memesDB'


var gImgs = [
    { id: 1, url: 'img/meme-imgs(square)/1.jpg', keywords: ['trump', 'usa', 'angry', 'president'] },
    { id: 2, url: 'img/meme-imgs(square)/2.jpg', keywords: ['dogs', 'animals', 'cute'] },
    { id: 3, url: 'img/meme-imgs(square)/3.jpg', keywords: ['baby', 'dog', 'cute'] },
    { id: 4, url: 'img/meme-imgs(square)/4.jpg', keywords: ['cat', 'animal'] },
    { id: 5, url: 'img/meme-imgs(square)/5.jpg', keywords: ['success', 'yes', 'baby', 'victory'] },
    { id: 6, url: 'img/meme-imgs(square)/6.jpg', keywords: ['awesomeness', 'history'] },
    { id: 7, url: 'img/meme-imgs(square)/7.jpg', keywords: ['baby', 'surprise'] },
    { id: 8, url: 'img/meme-imgs(square)/8.jpg', keywords: ['clown', 'strange outfit', 'hat'] },
    { id: 9, url: 'img/meme-imgs(square)/9.jpg', keywords: ['haha', 'funny', 'bastard'] },
    { id: 10, url: 'img/meme-imgs(square)/10.jpg', keywords: ['obama', 'president', 'usa', 'white teeth'] },
    { id: 11, url: 'img/meme-imgs(square)/11.jpg', keywords: ['gays', 'kiss', 'basketball'] },
    { id: 12, url: 'img/meme-imgs(square)/12.jpg', keywords: ['blame'] },
    { id: 13, url: 'img/meme-imgs(square)/13.jpg', keywords: ['Leonardo DiCaprio', 'actor', 'holywood'] },
    { id: 14, url: 'img/meme-imgs(square)/14.jpg', keywords: ['glasses', 'matrix', 'morpheus', 'movie'] },
    { id: 15, url: 'img/meme-imgs(square)/15.jpg', keywords: ['actor', 'movie'] },
    { id: 16, url: 'img/meme-imgs(square)/16.jpg', keywords: ['star track', 'movie', 'hollywood'] },
    { id: 17, url: 'img/meme-imgs(square)/17.jpg', keywords: ['putin', 'president', 'russia', 'dictator'] },
    { id: 18, url: 'img/meme-imgs(square)/18.jpg', keywords: ['toy story', 'movie', 'hollywood'] }
]

function createNewMeme() {
    return {
        id: getNextIdentifier(),
        selectedImgId: 0,
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
}

var gMeme

function getMeme() {
    return gMeme
}

function getRandMeme() {
    addListeners()
    gMeme = createNewMeme()

    var randNumTxtLines = getRandomIntInclusive(1, 2)
    gMeme.selectedImgId = getRandomIntInclusive(1, 18)
    gMeme.lines = []
    for (var i = 0; i < randNumTxtLines; i++) {
        const newLine = {
            txt: makeLorem(5),
            size: getRandomIntInclusive(15, 35),
            align: 'center',
            color: getRandomColor(),
            font: 'impact',
            stroke: getRandomColor(),
            linePosX: 175,
            linePosY: i == 0 ? 30 : 320
        }
        gMeme.lines.push(newLine)
    }
}

function setLineTxt(memeLineTxt) {
    const { lines } = gMeme
    lines[gMeme.selectedLineIdx].txt = memeLineTxt
}

function showEditor() {
    var elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = "none"
    var elMemeEditor = document.querySelector('.meme-editor-container')
    elMemeEditor.classList.remove('hide')
}

function setImg(imgId) {
    gMeme = createNewMeme()
    gMeme.selectedImgId = imgId
    showEditor()
    addListeners()
    renderMeme(getMeme(), gElCanvas)
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

function moveLine(x, y) {
    const { lines } = gMeme

    if (!x) {
        lines[gMeme.selectedLineIdx].linePosY += y
        x = lines[gMeme.selectedLineIdx].linePosX
    }

    if (!y) {
        lines[gMeme.selectedLineIdx].linePosX += x
        y = lines[gMeme.selectedLineIdx].linePosY
    }
}

function addLine() {
    if (!elLineInput.value) return
    const newLine = {
        txt: '',
        size: 30,
        align: 'center',
        color: 'blue',
        font: 'impact',
        stroke: 'red',
        linePosX: 175,
        linePosY: gMeme.lines.length > 1 ? 175 : 330
    }
    gMeme.selectedLineIdx = gMeme.lines.length
    gMeme.lines.push(newLine)
    elLineInput.value = ''
}

function removeLine() {
    const { lines } = gMeme
    if (gMeme.lines.length === 1) {
        elLineInput.value = ''
        lines[gMeme.selectedLineIdx].txt = ''
        return
    }
    lines.splice(-1)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

var switchLineDirection = 'down'

function switchLine() {
    if (gMeme.lines.length < 2) return

    if (gMeme.selectedLineIdx > 0 && switchLineDirection === 'down') {
        gMeme.selectedLineIdx--
        elLineInput.value = gMeme.lines[gMeme.selectedLineIdx].txt

    } else if (gMeme.selectedLineIdx === 0 || switchLineDirection === 'up') {
        switchLineDirection = 'up'
        gMeme.selectedLineIdx++
        elLineInput.value = gMeme.lines[gMeme.selectedLineIdx].txt

        if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
            switchLineDirection = 'down'
        }
    }
}

function saveMeme() {
    document.querySelector('.user-message').innerHTML = `<span>Your Meme successfully saved</span>`
    document.querySelector('.share-button').innerHTML = `<button onclick="onShowGallery('memes')" class="action-btn save-meme">Get your saved Meme</button> `
    document.querySelector('.modal-wrapper').style.display = 'block'
}

function _saveToStorage(meme) {
    var savedMemes = loadFromStorage(STORAGE_KEY, true) || {}
    savedMemes[meme.id] = meme
    saveToStorage(STORAGE_KEY, savedMemes, true)
}

function _loadFromStorage() {
    loadFromStorage(STORAGE_KEY, true)
}
