//CLasses
// class List{
//     constructor(){
//         this.data = [];
//     }
//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }
// class TodoList extends List {
//     constructor(){
//         super(); //esse super conecta o constructor que vai ser modificado ao construtor que ele herdou
//         this.usuario = "Diego";
//     }
//     mostrausuario(){
//         console.log(this.usuario);
//     }
// }
// var minhalista = new TodoList();
// document.getElementById('novotodo').onclick = function() {
//     minhalista.add('Novo Todo');
// }
// minhalista.mostrausuario();
// class Matematica{
//     static soma(a, b){ //o static não usa construtor, serve para pequenas funções de pedir algo e retornar apenas
//         return a + b;
//     }
// }
// console.log(Matematica.soma(1,2));
//Const e let
//const é como o var, POREM o const é READ ONLY, ou seja, não se pode definir e depois alterar o seu valor;
//com o const é possivel mutar valores, ou seja, alterar valores de dentro de um objeto ou array, mas nao alterar o objeto ou o array em sí
//exemplo
// const usuario = { nome: 'Diego' };
// usuario.nome = 'Cleiton';
// console.log(usuario);
//escopo é todo o conteúdo que existe dentro de um objeto de function
//o let ou variavel de escopo so funciona dentro do escopo, ou seja, não é possível chamar essa variável fora do escopo
//exemplo
// function teste(x){
//     let y = 2;
//     if(x > 5) {
//         let y = 4; //aqui esta dentro do escopo, que é tudo que está dentro da function teste, fora isso o y não é acessível
//         console.log(x, y);
//     }
// }
// teste(10);
//array/vetores
// const arr = [1,3,5,7,9];
// const newArr = arr.map(function(item, index){ //item é cada conteudo do arr, e index é a posição de cada conteudo
//     return item * index;
// })
// console.log(newArr);
//REDUCE
//como transformar um vetor inteiro em uma unica informação/variavel/numero
// const sum = arr.reduce(function(total, next){
//     return total + next;
// })
// console.log(sum);
//FILTER
//filtrar algum array
// const filter = arr.filter(function(item){
//     return item % 3 === 0;
// })
// console.log(filter);
//FIND
//verificar se existe alguma informação no array, ou se é possivel encontrar no array
// const find = arr.find(function(item){
//     return item === 3; //se exisitr retora o numero, se nao existir retorna undefinided
// })
// console.log(find);
//Arrow => functions
// const arr = [1,3,5,7,9,11];
// const newArr = arr.map(item => item * 2)  
//     //antes ...(function(item){ *pulalinha* return item * 2;})
// console.log(newArr);
//ou
// const teste = () => {return 'teste';} // [1,2,3,4] //NAO FUNCIONA { nome : 'Diego'} PQ ISSO É OBJETO, E AS CHAVES SAO O CORPO DA FUNÇÃO, TERIA QUE SER CHAVES DENTRO DE CHAVES OU PARENTESES ENVOLTA DAS CHAVES
// console.log(teste());
//Valores Padrão
//dizer que dois valores estão definidos, e que dps estes valores podem ser substituídos individualmente
//exemplo
//NAO FUNCIONA
// function soma(a,b){
//     return a + b;
// }
// soma(1); //passar somente um valor ou nenhum, o sistema nao tem como fazer 
// soma();
//FUNCIONA
// function soma(a = 3, b = 6){   //estes valores estão fixados ou PADRONIZADOS 
//     return a + b;
// }
// console.log(soma(1)); //o 1 substitui o A
// console.log(soma()); // a soma acontece com os valores que ja estão padronizados
//OU EM FORMATO DE ARROW FUNCTION
//const soma = (a = 3, b = 6) => a + b;
//console.log(soma(1));
//console.log(soma());
//Desestruturação
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     endereco:{
//         cidade: 'Rio do Sul',
//         estado: 'SC'
//     }
// };
//Para acessar o USUARIO, o mais comum é fazer assim:
// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
//MASSS há um jeito mais facil, pela desestruturação
// const {nome, idade, endereco:{ cidade } } = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
//OU por exemplo em uma função
//utilizando o mesmo usuário e as informações
// function mostranome(usuario){
//     console.log(usuario.nome);
// }
// mostranome(usuario);
// ao inves disso, pode se reduzir a isso
// function mostranome({ nome, idade }){
//     console.log(nome, idade);
// }
// mostranome(usuario);
//REST/SPREAD
//REST pega o resto das propriedades
"use strict";
