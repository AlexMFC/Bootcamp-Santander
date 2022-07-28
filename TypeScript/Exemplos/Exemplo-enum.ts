const pessoa ={
    nome: 'Fulano',
    idade: 28,
    profissao: 'Desenvolvedor'
}

pessoa.idade = 29;

const alex: {nome:string, idade:number, profissao:string}={
    nome: 'Alex',
    idade: 24,
    profissao: 'estudante'
}

const paula: {nome:string, idade:number, profissao:string}={
    nome: 'Paula',
    idade: 34,
    profissao: 'Estudante'
}

enum Profissao{
    Professor,
    Ator,
    Desenvolvedor,
    Estudante
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

interface Estudante extends pessoa{
    materias: string[],
    
}

const ciclano: pessoa = {
    nome: "Ciclano",
    idade: 29,
    profissao: Profissao.Desenvolvedor
}

const Alexs: Estudante ={
    nome: 'Alex',
    idade: 24,
    profissao: Profissao.Estudante,
    materias: ['C1', 'C2', 'Algebra']

}

function listar(lista:string[]){
    for (const item of lista){
        console.log('-', item)
    }
}

listar(Alexs.materias)