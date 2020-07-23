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

//em objetos
// const usuario = {
//     nome: 'Diego',
//     idade: 23,
//     empresa: 'Rocketseat'
// };
// const { nome, ...resto} = usuario;

// console.log(nome);
// console.log(resto);

//em array
// const arr = [1,2,3,4];

// const [ a,b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

//ao invés de, cada vez que eu quiser colocar mais um elemento (o C,D,E) na soma eu tiver que colocar em todos os lugares

// function soma(a,b){ //(a,b,c)(a,b,c,d)
//     return a + b; //(a+b+c)(a+b+c+d)
// }

// console.log(soma(1,2)); //(1,2)(1,2,3)(1,2,3,4)

//faz em forma de arrow function

// function soma(...params){
//     return params.reduce((total, next) => total + next);
// }

// console.log(soma(1,2,3,4,5,6,7,8,9))

//SPREAD
//faz o papel de repassar as informações de um array, por exemplo, pro outro. junta as informações

// const arr1= [1,2,3];
// const arr2= [4,5,6];
// const arr3= [...arr1, ...arr2];
// console.log(arr3);

//ou

//em objeto

// const usuario1 = {
//     nome:'Diego',
//     idade:23,
//     empresa:'Rocketseat'
// } 

// const usuario2 = {...usuario1, nome:'Gabriel' }; //esse ...usuario1 copiará o usuario, logo depois da virgula é possivel passar um parametro e altera-lo 

// console.log(usuario2);

//Template Literals
//inserir variaveis dentro de strings

// const nome = "diego";
// const idade = 23;

// console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');
// //COMO SIMPLIFICAR
// console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

//Object Short Sintax

// const nome = "Diego";
// const idade = 23;

// const usuario = {
//     nome,     //ao inves de nome: nome;
//     idade,    //ao inves de idade: idade;  
//     empresa:'Rocketseat'
// };

// console.log(usuario);

//WEBPACK MODULE 

// import * as funcoes from '../funcoes';
// import soma, {  sub } from './funcoes';
// import soma from './soma';

// console.log(funcoes.soma(1, 2));
// console.log(funcoes.sub(4, 2))

//DESAFIO WEBPACK SERVER

// import classeusuario, {idade as idadeusuario} from './functions';

// console.log(classeusuario.info());
// console.log(idadeusuario);


//ASYNC AWAIT

// const minhapromise = () => new Promise((resolve, reject) => {
//     setTimeout (() => {resolve('ok')}, 2000);
// })

//forma antiga
// minhapromise()
//     .then(response => {
//     console.log(response);
// })
//     .catch(err => {
//         console.log(err);
//     })

//forma a partir do ES8

//sem arrow function
// async function executapromise(){
//     console.log(await minhapromise()); //executa primeiro em 2000 ms
//     console.log(await minhapromise()); //executa em 2000 ms tb porem apos ter executado a primera
//     console.log(await minhapromise()); //executa em 2000 ms tb porem apos ter executado a segunda
    
// }

//com arrow function

// const executapromise = async() => {
//     console.log(await minhapromise());
//     console.log(await minhapromise());
//     console.log(await minhapromise());
// }
// executapromise();

//CONFIGURANDO AXIOS

// import axios from 'axios';

// class api{
//     static async getuserinfo(username) {
//         try {
//         const response = await axios.get(`https://api.github.com/users/${username}`)
//         console.log(response);
//     } catch (err){
//         console.log('Erro na API');
//     }
//     }
// }

// api.getuserinfo('gabrielcesarrogerio')

//DESAFIO ASYNC/AWAIT

//1
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// const umporsegundo = async() => {
//     console.log(await delay(console.log('1s')));
//     console.log(await delay(console.log('2s')));
//     console.log(await delay(console.log('3s')));
// }

// umporsegundo();

//2
// import axios from 'axios';

// class api{
//     static async getuserfromgithub(user){
//         try{
//             const response = await axios.get(`https://api.github.com/users/${user}`)
//             console.log(response);
//         }catch(err) {
//             console.log('usuario nao existe');
//         }
//     }
// }

// api.getuserfromgithub('gabrielcesarrogerio');
// api.getuserfromgithub('marmitamarmitamarmita');

//3
// import axios from 'axios';

// class github{
//     static async getrepo(repo){
//         try{
//             const response = await axios.get(`https://api.github.com/repos/${repo}`)
//             console.log(response);
//         }catch(err){
//             console.log('Repositorio inexistente');
//         }
//     }
// }

// github.getrepo('gabrielcesarrogerio/ecoletaexperience');
// github.getrepo('rocketseat/ikudufd');

//4
// import axios from 'axios';

// class usuario{
//     static async buscausuario(user){
//         try{
//             const response = await axios.get(`https://api.github.com/users/${user}`)
//             console.log(response.data);
//         }catch(err){
//             console.log('Usuario inexistente');
//         }
//     }
// }

// usuario.buscausuario('diego3g');

//APLICAÇÃO ES6+

import api from './api';

class app {
    constructor(){
        this.repositories = [];
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repo-list');
        this.registerhandlers();
    }
    registerhandlers(){
        this.formEl.onsubmit = (event) => this.addrepository(event);
     }
     setloading(loading = true){
         if(loading === true){
             let loadingEL = document.createElement('span');
             loadingEL.appendChild(document.createTextNode('Carregando'));
             loadingEL.setAttribute('id', 'loading');
             this.formEl.appendChild(loadingEL);
         }else {
             document.getElementById('loading').remove();
         }
     }
    async addrepository(event){
        event.preventDefault();
        const repoinput = this.inputEl.value;
        if(repoinput.lenght === 0)
        return;
        this.setloading();
        try{
            const response = await api.get(`/repos/${repoinput}`);
            const { name, description, html_url, owner:{avatar_url}} = response.data;
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            this.inputEl.value = '';
            this.render();
        }catch (err){
            alert('Repositorio inexistente');
            this.inputEl.value = '';
        }
        this.setloading(false);
    }
    
        render() {
            this.listEl.innerHTML = '';
            this.repositories.forEach(repo => {
                let imgEl = document.createElement('img');
                imgEl.setAttribute('src', repo.avatar_url);
                let titleEl = document.createElement('strong');
                titleEl.appendChild(document.createTextNode(repo.name));
                let descriptionEl = document.createElement('p');
                descriptionEl.appendChild(document.createTextNode(repo.description));
                let linkEl= document.createElement('a');
                linkEl.setAttribute('target', '_blank');
                linkEl.setAttribute('href', repo.html_url)
                linkEl.appendChild(document.createTextNode('acessar'));
                let listitemEl = document.createElement('li');
                listitemEl.appendChild(imgEl);
                listitemEl.appendChild(titleEl);
                listitemEl.appendChild(descriptionEl);
                listitemEl.appendChild(linkEl);

                this.listEl.appendChild(listitemEl);

            })
        }
    }

new app();