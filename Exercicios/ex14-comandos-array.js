let frutas = ['Maçã', 'Banana', 'Melão', 'Abacate'];

frutas[0] = 'Pêra'; //modifica o index do array
console.log(frutas.join(', ')); //comando para adicionar uma string entre os objetos do array sem alterar o array.
frutas[frutas.length - 1] = 'Kiwi'; //troca o último index sem que precise saber quantos tem ao todo.
console.log(frutas);