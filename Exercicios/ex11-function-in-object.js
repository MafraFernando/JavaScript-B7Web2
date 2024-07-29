let pessoa = {
    nome: 'Fernando',
    sobrenome: 'Mafra',
    idade: 33,
    sexo: 'masculino',
    nomeCompleto: function () {
       // return this.nome + ' ' this.sobrenome;
       return `${this.nome} ${this.sobrenome}`;
       
    }
}
console.log(pessoa.nomeCompleto());