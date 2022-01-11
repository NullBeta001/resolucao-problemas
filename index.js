// variável, seu valor pode ser alterado no decorrer do programa
let nomeEstudante = "NullBeta";
console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
const nomeDoEstudante = "Fábio";
console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
String: nomeEstudante = "Helena";

let listaDeEstudantes = ["NullBeta", "Fábio", "Pedro", "Paulo", "Sérgio", "Wesley"]

let quantidadeDeEstudantes = listaDeEstudantes.length;
console.log(quantidadeDeEstudantes);
for (let indice=0; indice<quantidadeDeEstudantes; indice++) {
    const alunoCorente = listaDeEstudantes[indice];
    console.log(alunoCorente)
}
let listaDeEstudantes = ["NullBeta", "Fábio", "Pedro", "Paulo", "Sérgio", "Wesley"];
let quantidadeDeEstudantes = listaDeEstudantes.length;

listaDeEstudantes.push("José");
console.log(listaDeEstudantes);
