let div = document.createElement('div');
div.innerHTML = '<h1>Enter A Color</h1><input type="text" value""/>'
document.body.appendChild(div);
let input = document.querySelector('input');

//center div
div.style.position = 'absolute';
div.style.top = '45%';
div.style.left = '50%';
div.style.transform = 'translate(-50%, -50%)';

//center input
input.style.position = 'absolute';
input.style.left = '50%';
input.style.transform = 'translate(-50%, -50%)';


input_box = div.querySelector('input');

//input_box value on change 


input_box.addEventListener("input", function (e) {
    var value = e.target.value;
    //check if value is empty


    if (value.match(/^\((\d+),\s*(\d+),\s*(\d+)\)$/)) {
        document.body.style.backgroundColor = 'rgb' + value;
        console.log('rgb');


    }
    else if (value.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)) {
        changeColorOn = [
            "a", "h1", "h2"
        ];
        document.body.style.backgroundColor = value;
        changeColorOn.forEach(function (element) {
            tag_element = document.querySelectorAll(element)

            tag_element.forEach(function (element) {
                element.style.color = getContrastColor(value);
            })   //change color of all elements

        });
        console.log('hex');
    }
    else if (value.match(/^[a-zA-Z]+$/)) {
        document.body.style.backgroundColor = value;
        console.log('text');
    }
    else if (value.match(/^\((\d+),\s*(\d+)%,\s*(\d+)%\)$/)) {
        document.body.style.backgroundColor = 'hsl' + value;
        console.log('hsl');
    }
    else if (value.match(/^\((\d+)%,\s*(\d+)%,\s*(\d+)%,\s*(\d+)%\)$/)) {
        document.body.style.backgroundColor = 'cmyk' + value;
        console.log('cmyk');
    }
});

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