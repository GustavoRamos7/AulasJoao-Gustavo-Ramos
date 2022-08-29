console.log (7/0) // resulta em infinity
console.log ("10" / 2) // retorna resultado pois ele verifica se a String 
console.log ("Show" * 2) // NaN = Not a Number
console.log (0.1 + 0.7) // possui algumas imprecisões
//console.log(10.toString())
console.log((10.345).toFixed(2))
console.log("3"+1) // ele concatena pois o + faz sentido no contexto de um
console.log("3"-1) // ele soma pois o - não faz sentido no contexto de string
function soma(x,y) {
    return console.log(x, "+", y , "=" , x + y)
    //Função com parâmetros que podem ser de qualquer tipo
}

soma (2,4)
soma (5,9)
soma(4) // aqui temos o exemplo onde a função só recebe o parâmetro x e não y, resultado
//em NaN
const teste = (c) => {
    return console.log(c, "é o conteúdo da variável")
} // aqui temos uma chamada no estilo 'arrow function' que pode ser colocada 
//dentro de uma variável
teste("oi")
teste(6)
function mensagem () {


    console.log("oi")
}// função simples sem parâmetros
mensagem()