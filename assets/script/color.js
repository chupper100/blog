var stored_value = localStorage.getItem('color');
//check if value
if (stored_value) {
    console.log(stored_value);
    document.body.style.backgroundColor = stored_value;
    input_box.addEventListener("input", function (e) {
        value = e.target.value;
        localStorage.setItem('color', value);
        document.body.style.backgroundColor = value;
    });
}