let colors = ['azul', 'amarelo', 'vermelho', 'verde'];
console.log(colors);
console.log(colors[2]);

let frutas = ['banana', 'maça', 'abacate', 'abacaxi'];
let lista = ['pão', 'leite', 'cereal', [frutas]];

console.log(lista);
console.log(lista[2]);

let lista2 = [
    'camiseta', 'bermuda', 
    ['terno', 'vestido']
];

console.log(lista2[2][0]);

let ingredientes = ['água', 'farinha', 'ovo', 'sal', 'açúcar', 'óleo'];
ingredientes.push('cenoura'); //adiciona um novo item no array, ultima posição.

console.log(`Total de ingredientes: ${ingredientes.length}`);
console.log(ingredientes);

let ingredientes2 = ['água', 'farinha', 'ovo', 'sal', 'açúcar', 'óleo'];
ingredientes2.pop(); //retira o último item do array.
ingredientes2.shift(); //retira o primeiro item do array.

console.log(ingredientes2);