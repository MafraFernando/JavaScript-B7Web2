let carrinho = ['camiseta', 'shorts', 'macacão', 'saia', 'blaser', 'vestido'];

let carrinhoMaior = carrinho.filter((item) => item.length > 6);
   

console.log(carrinhoMaior);

let fruits = ['maça', 'banana', 'pêra', 'uva', 'abacate'];

let ok = fruits.every((value) => value.length > 4); //usado every "sempre" quando todos forem alguma coisa.

console.log(fruits);
if (ok) {
    console.log('todos são maiores que 4.');
} else {
    console.log('algum não é maior que 4')
}

let fruits2 = ['maça', 'banana', 'pêra', 'uva', 'abacate'];

let ok2 = fruits2.some((value) => value.length > 3); // some "algum" vai acusar se algum item pertence ao filtro.
console.log(fruits2);

if (ok2) {
    console.log('Alguma é maior que 3');
} else {
    console.log('Nenhuma é maior que 3');
}

let fruits3 = ['maça', 'banana', 'pêra', 'uva', 'abacate'];

if (fruits3.includes('uva')) { //pesquisa diretamente pelo nome do item
   console.log('Tem uva sim!');
} else {
    console.log('Não tem uva aqui.');
}

