var array1 = [[5, 10], [4, 8]];
var array2 = [[2, 3], [8, 12]];

function multiplica_matriz() {
    var num_linhas1 = array1.length;
    var num_linhas2 = array2.length;
    var num_colunas1 = array1[0].length;
    var num_colunas2 = array2[0].length;
    array_resultado = new Array(num_colunas1);
    if (num_linhas1 == num_colunas2) {
        for (linha = 0; linha < num_linhas1; linha++) {
            array_resultado[linha] = new Array(num_colunas2)
            for (coluna = 0; coluna < num_colunas2; coluna++) {
                array_resultado[linha][coluna] = 0  // inicializando a matriz resultado
                for (lc=0;lc<num_colunas1;lc++){
                    array_resultado[linha][coluna] += array1[linha][lc] * array2[lc][coluna]
                }
            }
        }    
    }
    else{
        console.log("nao foi possivel multiplicar a matriz, entre com uma valida!!!")
    }
    console.log(array_resultado)
    }

multiplica_matriz();

//verificar se os valores batem