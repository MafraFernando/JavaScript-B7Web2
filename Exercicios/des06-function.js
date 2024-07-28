 function digaMeuNome() {
    console.log("Fernando Mafra");
}
digaMeuNome();

function meuNome() {
    let name = 'Fernando';
    console.log(name);
}
meuNome();

function digaQualquerNome(nome) {
    console.log(nome);
}
digaQualquerNome("Maria");

function soma(n1, n2) {
    let resultado = n1 + n2;
    console.log(resultado);
}
soma(7, 3);
soma(59, 10);

function multiplicacao(n1, n2, n3) {
    let resultado = n1 * n2 * n3;
    console.log(resultado);
}
multiplicacao(10, 10, 20);
multiplicacao(1, 2, 10);

function estaEndividado(receita, gastos) {
    if (receita > gastos) {
        return 'Está no Azul';
    } else {
        return 'Está no Vermelho!'
    }
}

let Maria = estaEndividado(7000, 10000);
let Fernando = estaEndividado(4000, 3500);
console.log(Maria);
console.log(Fernando);

// arrow function

let nomeCompleto = (nome) => {
    console.log("Fernando");
    
}
nomeCompleto();

const sobrenome = sob => 'Fernando ' + sob;
console.log(sobrenome("Mafra"));


function listaDeCompra(i1, i2, i3, i4, i5) {
    let lista = i1 + i2 + i3 + i4 + i5;
    console.log(lista);
}
listaDeCompra("abacate, mamao, leite, pera, chiclete");

// variável fora de função pode ser utilizada dentro da função

let count = 0;

function add() {
    count++;
}
add();
add();
 
console.log(count);

function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addSquares(3, 2));