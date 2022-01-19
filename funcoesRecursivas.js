// Recursividade
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))

/**
 * Exemplo: com o número 5
 * 
 * 5! = 5 x 4! - calcula o fatorial de 4
 * 
 * 
 * 
 * 
 * 
 */