document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.button-wrapper');    
    let currentPlayer = 'X';
    let movesCounter = 0;
    
    function turn(button) {
        if (button.disabled) {
            return;
        }
        if (currentPlayer === 'X') {
            showImgX(button);
        } else {
            showImgO(button);
        }
        button.disabled = true
        movesCounter++
        // Проверка на победу, обновление интерфейса и др. действия
        checkForWin()
        // Смена текущего игрока для следующего хода
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
function congratulationFunction(){
    alert('Поздравляем победителя!');

    let congratulationPrompt = confirm('Хотите проанализировать эту игру? Если вы хотите начать новую игру, ответьте «ОК». Если вы хотите проанализировать эту игру, ответьте «Отмена».');
    
    if (congratulationPrompt === true) {
        return window.location.reload();
    }
}
function showDraw(){
    alert ('Ничья ;)')
    return window.location.reload();
}
function checkForWin(){
    const winCombinations = [
        [0, 3, 6], [2, 5, 8], [0, 1, 2], [6, 7, 8], [0, 4, 8], [2, 4, 6], [3, 4, 5], [1, 4, 7]
    ];
    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if(buttons[a].innerText === currentPlayer && buttons[b].innerText === currentPlayer && buttons[c].innerText === currentPlayer) {
            setTimeout(congratulationFunction, 100)
        }
    }
    if(movesCounter === buttons.length) {
        setTimeout(showDraw, 100);
    } 
}
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            turn(button);
        });
    });
});
function showImgX(button){
    let createImgX = document.createElement('h1')
    createImgX.textContent = 'X'
    createImgX.className = 'h1-X-tittle'
    button.appendChild(createImgX)
}
function showImgO(button){
    let createImgO = document.createElement('h1')
    createImgO.textContent = 'O'
    createImgO.className = 'h1-O-tittle'
    button.appendChild(createImgO)
}