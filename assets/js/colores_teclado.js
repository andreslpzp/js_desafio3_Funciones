document.addEventListener('keypress', function (event) {
    const keyElement = document.getElementById('key');
    let color;

    switch (event.key) {
        case 'a':
            color = 'pink';
            keyElement.style.backgroundColor = color;
            keyElement.textContent = `Background color: ${color}`;
            break;
        case 's':
            color = 'orange';
            keyElement.style.backgroundColor = color;
            keyElement.textContent = `Background color: ${color}`;
            break;
        case 'd':
            color = 'lightblue';
            keyElement.style.backgroundColor = color;
            keyElement.textContent = `Background color: ${color}`;
            break;
        case 'q':
            createNewDiv('purple');
            break;
        case 'w':
            createNewDiv('grey');
            break;
        case 'e':
            createNewDiv('brown');
            break;
        default:
            color = null;
    }
});

function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '4px solid black';
    newDiv.style.margin = '10px';
    newDiv.textContent = `Background color: ${color}`;
    document.body.appendChild(newDiv);
}


