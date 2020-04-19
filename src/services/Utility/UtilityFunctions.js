function isHidden(element) { 
    return element.offsetParent === null;
}

function scrollX(element, distance) { 
    element.scrollBy(distance, 0);
}

function scrollY(element, distance) { 
    element.scrollBy(0, distance);
}

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
}

function convertBytesToBase64(bytes) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(bytes)));
}

export {isHidden, scrollX, scrollY, deepCopy, convertBytesToBase64};