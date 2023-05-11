//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

// a mesma frase usando template string 
const fraseComTemplateString = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS,  ${"mas não deixe o gato sair".toUpperCase()}"`


const newString = frase.replace("verde", "rosa").replace("azul","laranja")

console.log(newString);

const fraseUsandoReplace = newString.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")

console.log(fraseUsandoReplace);

const fraseUsandoToUpperCase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, ${"mas não deixe o gato sair".toUpperCase()}"`

console.log(fraseComTemplateString);
