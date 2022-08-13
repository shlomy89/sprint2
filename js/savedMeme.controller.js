
function renderSavedMemes() {

    let myMemes = _loadFromStorage(STORAGE_KEY)

    let strHTML = gImgs.map(img => `
    <div class="img img1">
    <img onclick="onImgSelect('${img.id}')" src="${img.url}">
    </div>
    `
    )
    document.querySelector('.gallery-grid').innerHTML = strHTML.join('')
}


function onSaveMeme() {
    // var meme = getMeme()
    gSavedMemes.push(gMeme)
    console.log('gSavedMemes:', gSavedMemes);
    // _saveToStorage()
}

