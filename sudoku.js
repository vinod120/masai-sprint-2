
function newBoard(){
  var input = document.querySelector('form#sudoku')
  for(var i=0; i<81; i++){
    input[i].value = ""
  }
}


function solve(matrix) {
    var i, j, b, k;
    for(i=0; i<=8; i++){
        for(j=0; j<=8; j++){
            if(!matrix[i][j]){
                for(k=1; k<=9; k++){
                    if(check(matrix, i, j, k)){
                        matrix[i][j] = k;
                        b = solve(matrix)
                        if(b){
                            return true;
                        }
                        matrix[i][j] = 0
                    }
                }
                return false
            }
        }
    }
    return true
}

function check(matrix, i, j, k) {
    var a, b;
    for(a=0; a<=8; a++){
        if(a!=i && matrix[a][j] == k){
            return false
        }
    }
    for(a=0; a<=8; a++){
        if(a!=j && matrix[i][a] == k){
            return false
        }
    }
    var y = Math.floor((i/3)) * 3
    var x = Math.floor((j/3)) * 3
    for(a=0; a<3; a++){
        for(b=0; b<3; b++){
            if(a!=i && b!=j && matrix[y+a][x+b] == k){
                return false
            }
        }
    }
    return true;
}

function getInputValues() {
    var input = document.querySelector('form#sudoku')
    var matrix
    var inputValue = []
    var i, j, k, z;
    for(i=0; i<81; i++){
        inputValue[i] = input[i].value
        matrix = [];
        k = -1;

        for(j=0; j<inputValue.length; j++){
            if(j % 9 === 0){
                k++;
                matrix[k] = []
            }
            matrix[k].push(inputValue[j])
        }
    }

    solve(matrix);

    z = 0;
    for(i=0; i< matrix.length; i++){
        for(j=0; j<matrix.length; j++){
            input[z].value = matrix[i][j];
            z++;
        }
    }
}

function sovleSudoku(){
  getInputValues()
}
