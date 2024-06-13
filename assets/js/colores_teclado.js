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
            color = 'purple';
            createOrUpdateKey2(color);
            break;
        case 'w':
            color = 'grey';
            createOrUpdateKey2(color);
            break;
        case 'e':
            color = 'brown';
            createOrUpdateKey2(color);
            break;
        default:
            color = null;
    }
});

function createOrUpdateKey2(color) {
    let key2Element = document.getElementById('key2');
    if (!key2Element) {
        key2Element = document.createElement('div');
        key2Element.id = 'key2';
        document.body.appendChild(key2Element);
    }
    key2Element.style.backgroundColor = color;
    key2Element.textContent = `Background color: ${color}`;
}



