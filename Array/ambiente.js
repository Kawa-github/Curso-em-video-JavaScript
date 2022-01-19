let num = [
    'ok',
    5,
    'ola'
]
pularLinha = () => console.log('\n')

// num.sort( )
num[3] = 'adicionei'
pularLinha()
num.push('adicionando via push')

console.log(num.length)

console.log('o valor da segunda posição/indice do array é: ' + num[2])
pularLinha()
console.log(num)

// Usando for tradicional
for(i = 0; i < num.length; i++){
    pularLinha()
    console.log(`A posição ${i} tem o valor: ${num[i]}`)
}

// Usando for in
for(let i in num){
    pularLinha()
    console.log(`A posição ${i} tem o valor: ${num[i]}`)
}

let posicao1 = num.indexOf('ola')
console.log(`A string ola está na posição ${posicao1}`)

let posicao2 = num.indexOf(5)
console.log(`O número está na posição ${posicao2}`)