
var gElCanvas
var gCtx
var gCurrentIdentifier = 0

const MEME_IDENTIFIER = "meme_identifier"
const elLineInput = document.querySelector('.line-input input')
const elGallery = document.querySelector('.gallery-container')
const elMemeEditor = document.querySelector('.meme-editor-container')


function onInit() {
    gCurrentIdentifier = loadFromStorage(MEME_IDENTIFIER, false) || 0
    gElCanvas = document.querySelector('.meme-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery('gallery')
    renderCanvas()
}

function getNextIdentifier() {
    gCurrentIdentifier++
    saveToStorage(MEME_IDENTIFIER, gCurrentIdentifier, false)
    return gCurrentIdentifier
}

function renderGallery(source) {
    const imgs = getImgsForDisplay()
    const elGalleryGrid = document.querySelector('.gallery-grid')
    // Render main gallery
    if (source === 'gallery') {
        let strHTML = ''

        strHTML = imgs.map(img => `
        <div class="img img${img.id}">
        <img onclick="onImgSelect('${img.id}')" src="${img.url}" />
        </div>
        `
        )
        elGalleryGrid.innerHTML = strHTML.join('')

    } else {
        //Rendering saved meme gallery
        const savedMemes = loadFromStorage(STORAGE_KEY, true)
        const elGalleryGrid = document.querySelector('.gallery-grid')
        elGalleryGrid.innerHTML = ''

        if (!savedMemes) {
            const elUserMessage = document.createElement('div')
            elUserMessage.className = "no-memes-to-show"

            const elMessageContent = document.createElement('h2')
            elMessageContent.className = "message-content"
            elMessageContent.innerText = "There's no saved memes to show"

            elUserMessage.appendChild(elMessageContent)
            elGalleryGrid.appendChild(elUserMessage)

        } else {

            for (let id in savedMemes) {
                let savedMeme = savedMemes[id]

                var elWrappingDiv = document.createElement('div')
                elWrappingDiv.className = "img img1"

                var elCanvas = document.createElement('canvas')
                elCanvas.onclick = function () {
                    onSavedMemeSelect(id)
                }
                elCanvas.className = "meme-canvas"
                elCanvas.height = 350
                elCanvas.width = 350

                renderMeme(savedMeme, elCanvas)

                elWrappingDiv.appendChild(elCanvas)
                elGalleryGrid.appendChild(elWrappingDiv)
            }
        }
    }
}

function onImgSelect(imgId) {
    setImg(imgId)
}

function onShowGallery(source) {
    renderGallery(source)
    showGallery()
}

function onSetSearch(txt) {
    setSearch(txt)
    renderGallery('gallery')
}

function onGetRandMeme() {
    getRandMeme()
    elGallery.style.display = "none"
    elMemeEditor.classList.remove("hide")
    renderMeme(getMeme(), gElCanvas)
}

function onSaveMeme() {
    saveMeme()
    _saveToStorage(gMeme)
}

function onSavedMemeSelect(id) {
    let savedMemes = loadFromStorage(STORAGE_KEY, true) || {}
    let meme = savedMemes[id]
    gMeme = meme
    renderMeme(meme, gElCanvas)
    elLineInput.value = gMeme.lines[gMeme.selectedLineIdx].txt
    showEditor()
}

function onToggleMenu() {
    document.querySelector('.header-btn').classList.toggle('menu-opened')
}