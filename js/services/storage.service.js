
function saveToStorage(key, val, isJSON) {
    if (isJSON) {
        val = JSON.stringify(val)    
    }
    localStorage.setItem(key, val)
}

function loadFromStorage(key, isJSON) {
    var val = localStorage.getItem(key)

    if (isJSON) {
        val = JSON.parse(val)
    }

    return val
}
