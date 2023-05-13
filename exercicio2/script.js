const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// tamanho da string original
console.log(minhaString.length);

// remoção dos espaços  no final da string 
const stringNova = minhaString.trim()

// tamanho da nova string, após remoção dos espaços
console.log(stringNova.length);

const newString = minhaString.replaceAll("________","sticioso")

console.log(newString);



