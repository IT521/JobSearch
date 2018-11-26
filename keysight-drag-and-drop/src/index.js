var showNewDrop = false;

function newDropArea(value) {
    var rightDrop = document.getElementById('right-drop');
    var newDrop = document.getElementById('drop-two');

    for (i = 1; i <= value; i++) {
        var figure = document.createElement('FIGURE');
        figure.setAttribute('class', 'drop');
        newDrop.appendChild(figure);
    }

    if (!showNewDrop) {
        rightDrop.style.display = 'block';
        showNewDrop = true;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    var img = document.getElementById(data);
    var cap = img.nextSibling;
    ev.target.appendChild(img);
    ev.target.appendChild(cap);
    newDropArea(img.getAttribute("data-value"));
}
