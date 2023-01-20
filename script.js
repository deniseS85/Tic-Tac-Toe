let field = [];
let currentShape = 'Player 2';
let endGame = false;
let win_audio = new Audio('sound/win.mp3');
let put_shape = new Audio('sound/putShape.mp3');

function fillField(id) {
    // Wenn Feld (Array) leer ist und wenn kein Game-Over ist, dann füge cross ODER circle ein
    if(!field[id] && !endGame) { 
        if (currentShape == 'Player 1') {
            currentShape = 'Player 2';
            document.getElementById('player-circle').style.opacity = "1"; 
            document.getElementById('player-cross').style.opacity = "0.5"; 
        } else {
            currentShape = 'Player 1';
            document.getElementById('player-cross').style.opacity = "1"; 
            document.getElementById('player-circle').style.opacity = "0.5";    
        }
        field[id] = currentShape;
        fillShape();
        checkWin();
    }
}

function fillShape() {
    for (let i = 0; i < field.length; i++) {
        if(field[i] == 'Player 1') {
            document.getElementById('circle' + i).classList.remove('d-none');
            put_shape.play();  
        }
        if(field[i] == 'Player 2') {
            document.getElementById('cross' + i).classList.remove('d-none');  
            put_shape.play();      
        }
    }
}

function checkWin() {
    // wer hat gewonnen: circle oder cross --> let winner
    let winner;
    // 1.Zeile                                       // kein undefined übergeben, wenn Array "empty" beinhaltet
    if (field[0] == field[1] && field[1] == field[2] && field[0]) {
        winner = field[0];
        document.getElementById('line1').classList.remove('d-none');
        document.getElementById('line1').style.transform = 'scale(1)';
    }
    // 2. Zeile
    if (field[3] == field[4] && field[4] == field[5] && field[3]) {
        winner = field[3];
        document.getElementById('line2').classList.remove('d-none');
        document.getElementById('line2').style.transform = 'scale(1)';
    }
    // 3. Zeile
    if (field[6] == field[7] && field[7] == field[8] && field[6]) {
        winner = field[6];
        document.getElementById('line3').classList.remove('d-none');
        document.getElementById('line3').style.transform = 'scale(1)';
    }
    // 1. Spalte
    if (field[0] == field[3] && field[3] == field[6] && field[0]) {
        winner = field[0];
        document.getElementById('line4').classList.remove('d-none');
        document.getElementById('line4').style.transform = 'rotate(90deg) scale(1)';
    }
    // 2. Spalte
    if (field[1] == field[4] && field[4] == field[7] && field[1]) {
        winner = field[1];
        document.getElementById('line5').classList.remove('d-none');
        document.getElementById('line5').style.transform = 'rotate(90deg) scale(1)';
    }
    // 3. Spalte
    if (field[2] == field[5] && field[5] == field[8] && field[2]) {
        winner = field[2];
        document.getElementById('line6').classList.remove('d-none');
        document.getElementById('line6').style.transform = 'rotate(90deg) scale(1)';
    }
    //diagonal links/rechts
    if (field[0] == field[4] && field[4] == field[8] && field[0]) {
        winner = field[0];
        document.getElementById('line7').classList.remove('d-none');
        document.getElementById('line7').style.transform = 'rotate(45deg) scaleX(1)';
    }
    //diagonal rechts/links
    if (field[2] == field[4] && field[4] == field[6] && field[2]) {
        winner = field[2];
        document.getElementById('line8').classList.remove('d-none');
        document.getElementById('line8').style.transform = 'rotate(-45deg) scaleX(1)';
    }
    showWinner(winner);
}

function opacityIfWin() {
    for (let i = 1; i < 9; i++) {
        document.getElementById('line' + i).style.opacity = '0.3';
        document.getElementById('table').style.opacity = '0.3';
        
    }
    
}

function showWinner(winner) {
    if (winner) {
        endGame = true;
        let whoWin = document.getElementById('who-win');
        // Game-Over Bild wird nach 1 Sekunde angezeigt
        setTimeout(function() {
            whoWin.classList.remove('d-none');
            whoWin.innerHTML = `Gewonnen hat: <div class="winner">${winner}</div>`;
            document.getElementById('restart-btn').classList.remove('d-none');
            win_audio.play();
            opacityIfWin();
        }, 1000);
    }
   
}

function draw(winner) {
    if (field == 9 && !winner) {
        endGame = true;
        let whoWin = document.getElementById('who-win');
        setTimeout(function() {
            whoWin.classList.remove('d-none');
            whoWin.innerHTML = 'Unentschieden!';
            document.getElementById('restart-btn').classList.remove('d-none');
            win_audio.play();
        }, 1000);
    }
}

function restart() {
    endGame = false;
    field = [];

    document.getElementById('who-win').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
    
    for (let i = 1; i < 9; i++) {
        document.getElementById('line' + i).classList.add('d-none');
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle' + i).classList.add('d-none');
        document.getElementById('cross' + i).classList.add('d-none'); 
    }
}