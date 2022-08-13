
function backToGallery() {

    var elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = "block"
    var elMemeEditor = document.querySelector('.meme-editor-container')
    elMemeEditor.classList.add('hide')

    document.querySelector('.line-input input').value = ''
    cleargMeme()
}
