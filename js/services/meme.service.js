
var gCanvasColor = '#ffffff'

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
            txt: 'I sometimes eat Falafel',//setLineTxt()
            size: 30,
            align: 'left',
            color: 'red'
        }
    ]
}

function getMeme() {
    const {lines} = gMeme
    var meme = {
        img: gImgs[gMeme.selectedImgId - 1].url,
        lineIdx: gMeme.selectedLineIdx,
        txt: lines[gMeme.selectedLineIdx].txt,
        size: lines[gMeme.selectedLineIdx].size,
        align: lines[gMeme.selectedLineIdx].align,
        color: lines[gMeme.selectedLineIdx].color
    }
    return meme
}

function setLineTxt(lineTxt) {
    const {lines} = gMeme
    lines[gMeme.selectedLineIdx].txt = lineTxt
    renderMeme()
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    renderMeme()
}