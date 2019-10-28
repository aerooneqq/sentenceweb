function isHidden(element) { 
    return element.offsetParent === null;
}

function scrollX(element, distance) { 
    element.scrollBy(distance, 0);
}

function scrollY(element, distance) { 
    element.scrollBy(0, distance);
}

export {isHidden, scrollX, scrollY};