for (let n = 0; n < 10; n++) {
    console.log('Item n ' + n);
};

let cores = ['branco', 'preto', 'marrom', 'azul', 'vermelho', 'verde'];

cores.push('lilás');

/* for (let n = 0; n < cores.length; n++) { //o loop só roda a quantidade de vezes que o array tem
    console.log(cores[n]);
} */

/* for (let i in cores) {  
    console.log(cores[i]);
} */

    for (let cor of cores) {
        console.log(cor);
    }

    //sendo 'in' para acessar a chave do array e 'of' acessar o objeto dentro do array.

    let raca = [
        {nome: 'branca', qt: 1500},
        {nome: 'preta', qt: 850},
        {nome: 'pardo', qt: 250}
    ];

    for (let cor of raca) {
        cor.nome = cor.nome.toUpperCase(); //deixar as letras maiusculas
        console.log(`Nome: ${cor.nome} - ${cor.qt}`);
    }