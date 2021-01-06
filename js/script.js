{
    const playGame = function(playerInput) {

        clearMessages();

        const getMoveName = function(argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            }
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const argComputerMove = getMoveName(randomNumber);

        /* if (randomNumber == '1') {
            computerMove = 'kamień';
        } else if (randomNumber == '2') {
            computerMove = 'papier';
        } else if (randomNumber == '3') {
            computerMove = 'nożyce';
        } */

        printMessage('Mój ruch to: ' + argComputerMove);

        /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

        console.log('Gracz wpisał: ' + playerInput);

        const argPlayerMove = getMoveName(playerInput);

        /* if (playerInput == '1') {
            playerMove = 'kamień';
        } else if (playerInput == '2') {
            playerMove = 'papier';
        } else if (playerInput == '3') {
            playerMove = 'nożyce';
        } */

        printMessage('Twój ruch to: ' + argPlayerMove);

        const displayResult = function(argComputerMove, argPlayerMove) {
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
                printMessage('Przegrywasz');
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
                printMessage('Przegrywasz');
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
                printMessage('Przegrywasz');
            } else if (argComputerMove === argPlayerMove) {
                printMessage('Remis');
            } else if (argPlayerMove == 'nieznany ruch') {
                printMessage('nieznany ruch');
            }
        }

        let change1 = displayResult(argComputerMove, argPlayerMove);

        console.log('moves:', argComputerMove, argPlayerMove);

    }

    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });
}