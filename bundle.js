//EXERCÍCIO 1
// class usuario{
//     constructor (){
//         this.email = []
//         this.senha = [];
//         this.admin = false;
//     }
//         add(email, senha){
//             this.email.push(email);
//             this.senha.push(senha); 
//         }
//         isadmin(){
//             if(this.admin==false){
//                 console.log('false');
//             }else{
//                 console.log('true');
//             }
//         }        
// }
// class admin extends usuario{
//     constructor(){
//         super();
//         this.admin = true;
//     }    
// }
// const user1 = new usuario ();
// user1.add('email@teste.com', 'senha123');
// const adm1 = new admin ();
// adm1.add('email@teste.com', 'senha123');
// console.log(user1.isadmin());
// console.log(adm1.isadmin())
// console.log(user1);
// console.log(adm1);
//EXERCÍCIO 2
// const usuarios = [
//     { nome : 'Diego', idade : '23', empresa : 'Rocketseat'},
//     { nome : 'Gabriel', idade : '15', empresa : 'Rocketseat'},
//     { nome : 'Lucas', idade : '30', empresa : 'Facebook'},
// ]
// const newarr = usuarios.map(item => item.idade);
// console.log(newarr);
// const secarr = usuarios.filter(item => item.idade >= '18' && item.empresa == 'Rocketseat');
// console.log(secarr);
// const terarr = usuarios.find(item => item.empresa == 'Google');
// console.log(terarr);
// const qrarr = usuarios.map(function(item){
//         const newit = item.idade * 2;
//         item.idade = newit;
//         if (item.idade <= 50){
//             return item;
//         }
// });
// console.log(qrarr);
//EXERCICIO 3
//3.1
// const arr = [1,2,3,4,5];
// const arrtest = arr.map(item => item +10);
// console.log(arrtest);
//3.2
// const usuario = {nome:'Diego', idade:23};
// const mostraidade = (usuario) => usuario.idade;
// console.log(mostraidade(usuario));
//3.3
// const nome = "Diego";
// const idade = 23;
// const mostrausuario = (nome = 'Diego', idade = 18) => ({nome, idade});
// console.log(mostrausuario(nome,idade));
// console.log(mostrausuario(nome));
//3.4
// const promise = () => new Promise(resolve, reject => resolve);
// console.log(promise);
//EXERCÍCIO 4
"use strict";
