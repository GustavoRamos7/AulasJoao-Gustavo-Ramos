let qualquer ='Legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.14
console.log (qualquer)
console.log (typeof qualquer) //tipagem

const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna o número ou letra na 4a posição
console.log(escola.charAt(5)) // retorna vazio, pois na 5a posição não há nada

//para colocar pode usar ""  '' ou ``

console.log(escola.charCodeAt(3)) // retorna valor da tabela UNICODE
console.log(escola.indexOf('3')) // índice associado a variavel escola

console.log(escola.substring(1)) //inclui índice 1 até o final
console.log(escola.substring(0,3)) // indice 0 a 2
console.log('Escola ' .concat(escola) .concat("!")) //Escola é um valor do tipo literal, ou
//poderia usar console.log('Escola + escola + "!")
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) //regex para substituir todos os digitos numéricos dentro do texto por e

console.log('Ana,Maria,Pedro'.split(','))//Conversão para array. Pode ser usado regex /,/