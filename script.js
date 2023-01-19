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
    checkWin();
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

function checkWin() {
    let winner;
    // 1.Zeile                                       // kein undefined übergeben
    if (field[0] == field[1] && field[1] == field[2] && field[0]) {
        winner = field[0];
        // wer hat gewonnen: circle oder cross --> let winner
    }
    // 2. Zeile
    if (field[3] == field[4] && field[4] == field[5] && field[3]) {
        winner = field[3];
    }
    // 3. Zeile
    if (field[6] == field[7] && field[7] == field[8] && field[6]) {
        winner = field[6];
    }
    // 1. Spalte
    if (field[0] == field[3] && field[3] == field[6] && field[0]) {
        winner = field[0];
    }
    // 2. Spalte
    if (field[1] == field[4] && field[4] == field[7] && field[1]) {
        winner = field[1];
    }
    // 3. Spalte
    if (field[2] == field[5] && field[5] == field[8] && field[2]) {
        winner = field[2];
    }
}