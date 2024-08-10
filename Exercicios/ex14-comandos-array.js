let frutas = ['Maçã', 'Banana', 'Melão', 'Abacate'];

frutas[0] = 'Pêra'; //modifica o index do array

console.log(frutas.join(', ')); //comando para adicionar uma string entre os objetos do array sem alterar o array.

frutas[frutas.length - 1] = 'Kiwi'; //troca o último index sem que precise saber quantos tem ao todo.

frutas.reverse(); // inverte a ordem dos objetos
frutas.sort(); //Faz uma ordem alfabética

let bigFruits = frutas.filter((item) => item.length > 4)
console.log(frutas);

let cars = [
    {carro: 'Ferrari', ano: 1988},
    {carro: 'Lamborghini', ano: 1990}, 
    {carro: 'Porsche', ano: 1991}
];

// abaixo o código para deixar em ordem pelo ano onde 1 é +1 na lista do array e -1 é anterior na lista e 0 ficar no mesmo lugar
 cars.sort((a, b) => {
    if (a.ano > b) {
        return 1;
    } else if (a.ano < b) {
        return -1;
    } else {
        return 0;
    }
}); 

// Modo simplificado: 

/* cars.sort((a, b) => a.ano - b.ano); */

console.log(cars);