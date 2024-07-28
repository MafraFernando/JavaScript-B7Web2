// Variável objeto pode ter várias propriedades de um mesmo objeto.

let personagem = {
    nome: 'Superman',
    idade: 30,
    nacionalidade: 'Kripton',
    reside: 'Smallville',
    habilidades: ['voar', 'super força', 'raios laser', 'super velocidade'],
    atributos: {
        forca: 100,
        agilidade: 100,
        inteligencia: 20,
    }
}

console.log(personagem);
console.log(personagem.reside);
console.log(`O ${personagem.nome} tem ${personagem.idade} anos. `);
console.log(`O ${personagem.nome} tem como atributos: ${personagem.atributos.forca} de força, ${personagem.atributos.agilidade} de agilidade e ${personagem.atributos.inteligencia} de inteligência.`);
console.log(`O ${personagem.nome} é muito conhecido por sua habilidade de ${personagem.habilidades[0]}.`);