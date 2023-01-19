let field = [];
let currentShape = 'cross';

function fillField(id) {
    // Abwechslung cross und circle
    if (currentShape == 'cross') {
        currentShape = 'circle';
    } else {
        currentShape = 'cross';
    }

    field[id] = currentShape;
    fillShape();
}

function fillShape() {
    for (let i = 0; i < field.length; i++) {
        if(field[i] == 'circle') {
            document.getElementById('circle' + i).classList.remove('d-none');       
        }
        if(field[i] == 'cross') {
            document.getElementById('cross' + i).classList.remove('d-none');       
        }
        
    }
}