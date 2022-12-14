
var gSearchBy

function showGallery() {
    var elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = "block"
    var elMemeEditor = document.querySelector('.meme-editor-container')
    elMemeEditor.classList.add('hide')
    document.querySelector('.modal-wrapper').style.display = 'none'

    document.querySelector('.line-input input').value = ''
}

function setSearch(searchStr) {
    gSearchBy = searchStr
}

function getImgsForDisplay() {
    if (!gSearchBy) return gImgs

    gSearchBy = gSearchBy.toLowerCase()

    return gImgs.filter(img => {
        return img.keywords.some(keyword => keyword.toLowerCase().startsWith(gSearchBy))
    })
}