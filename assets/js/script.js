var tableBoard = [
    0,0,0,
    0,0,0,
    0,0,0
]
var player = 1
const playerDisplay = document.getElementById('player')
playerDisplay.innerText = 'Player: '+player
function play(buttonId){
    var cellBoard = document.getElementById(buttonId)
    checkCellStatus(cellBoard)
    if (cellState == 0){
        if (player == 1){
            cellBoard.innerText='❌'
            tableBoard[parseInt(buttonId)-1] = player
            player += 1
        }else{
            cellBoard.innerText='⭕'
            tableBoard[parseInt(buttonId)-1] = player
            player = 1
        }

    }
    playerDisplay.innerText = 'Player: '+player        
    checkWinner()
    if (winner == true){
        alert("Houve um vencedor!\nAperte F5 para jogar novamente💥")
    }
}

function checkCellStatus(cell){
    if (cell.innerText != ''){
        cellState = 1

    }else{
        cellState = 0
    }
    return cellState
}

function checkWinner(){
    winner = false
    if(tableBoard[0] ==1 && tableBoard[1] == 1 && tableBoard[2] == 1){
           winner = true
}   
    if(tableBoard[3] ==1 && tableBoard[4] == 1 && tableBoard[5] == 1){
           winner = true
}   
    if(tableBoard[6] ==1 && tableBoard[7] == 1 && tableBoard[8] == 1){
           winner = true
}   
    if(tableBoard[0] ==1 && tableBoard[3] == 1 && tableBoard[6] == 1){
           winner = true
}   
    if(tableBoard[1] ==1 && tableBoard[4] == 1 && tableBoard[7] == 1){
           winner = true
}   
    if(tableBoard[2] ==1 && tableBoard[5] == 1 && tableBoard[8] == 1){
           winner = true
}
    if(tableBoard[0] ==1 && tableBoard[4] == 1 && tableBoard[8] == 1){
           winner = true
}
    if(tableBoard[2] ==1 && tableBoard[4] == 1 && tableBoard[6] == 1){
           winner = true
}   

//player 2
    if(tableBoard[0] ==2 && tableBoard[1] == 2 && tableBoard[2] == 2){
           winner = true
}   
    if(tableBoard[3] ==2 && tableBoard[4] == 2 && tableBoard[5] == 2){
           winner = true
}   
    if(tableBoard[6] ==2 && tableBoard[7] == 2 && tableBoard[8] == 2){
           winner = true
}   
    if(tableBoard[0] ==2 && tableBoard[3] == 2 && tableBoard[6] == 2){
           winner = true
}   
    if(tableBoard[1] ==2 && tableBoard[4] == 2 && tableBoard[7] == 2){
           winner = true
}   
    if(tableBoard[2] ==2 && tableBoard[5] == 2 && tableBoard[8] == 2){
           winner = true
}
    if(tableBoard[0] ==2 && tableBoard[4] == 2 && tableBoard[8] == 2){
           winner = true
}
    if(tableBoard[2] ==2 && tableBoard[4] == 2 && tableBoard[6] == 2){
           winner = true
}

}
