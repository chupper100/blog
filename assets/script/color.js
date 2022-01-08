var stored_value = localStorage.getItem('color');
//check if value
if (stored_value) {
    console.log(stored_value);
    changeColor(stored_value)
}

function changeColor(value) {
    type = checkType(value);
    if (type == 'rgb' || type == 'hsl' || type == 'cmyk') {
        document.body.style.backgroundColor = type + value;
    } else if (type == 'hex') {
        hexColor(value);
    } else if (type == 'name') {
        document.body.style.backgroundColor = value;
    }
}

//check type of color
function checkType(value) {
    if (value.match(/^\((\d+),\s*(\d+),\s*(\d+)\)$/)) {
        return 'rgb';
    } else if (value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)) {
        return 'hex';
    } else if (value.match(/^[a-zA-Z]+$/)) {
        return 'name';
    } else if (value.match(/^\((\d+),\s*(\d+)%,\s*(\d+)%\)$/)) {
        return 'hsl';
    } else if (value.match(/^\((\d+)%,\s*(\d+)%,\s*(\d+)%,\s*(\d+)%\)$/)) {
        return 'cmyk';
    }
}

// function
function hexColor(value) {
    document.body.style.backgroundColor = value;

    changeColorOn = [
        "a", "h1", "h2"
    ];
    changeColorOn.forEach(function (element) {
        tag_element = document.querySelectorAll(element)
        tag_element.forEach(function (element) {
            element.style.color = getContrastColor(value);
        })
    });
}



// get contrast color
function getContrastColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}
function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}