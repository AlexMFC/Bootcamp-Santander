"use strict";
const pessoa = {
    nome: 'Fulano',
    idade: 28,
    profissao: 'Desenvolvedor'
};
pessoa.idade = 29;
const alex = {
    nome: 'Alex',
    idade: 24,
    profissao: 'estudante'
};
const paula = {
    nome: 'Paula',
    idade: 34,
    profissao: 'Estudante'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Ator"] = 1] = "Ator";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["Estudante"] = 3] = "Estudante";
})(Profissao || (Profissao = {}));
const ciclano = {
    nome: "Ciclano",
    idade: 29,
    profissao: Profissao.Desenvolvedor
};
const Alexs = {
    nome: 'Alex',
    idade: 24,
    profissao: Profissao.Estudante,
    materias: ['C1', 'C2', 'Algebra']
};
function listar(lista) {
    for (const item of lista) {
        console.log('-', item);
    }
}
listar(Alexs.materias);
