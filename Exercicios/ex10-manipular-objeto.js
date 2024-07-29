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
personagem.atributos.forca += 5;

console.log(`A força foi aumentada para ${personagem.atributos.forca}`);
personagem.habilidades.push('respirar embaixo da agua');

console.log(`Todas as habilidades dele são: ${personagem.habilidades}`);

let personagem2 = {
    nome: 'Fernando',
    idade: 33,
    carros: [
        {modelo: 'Clio', cor: 'prata'},
        {modelo: 'Gol', cor: 'grafite'} 
    ]
}

console.log(personagem2.carros[1].cor);