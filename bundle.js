"use strict";

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
var usuarios = [{
  nome: 'Diego',
  idade: '23',
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: '15',
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: '30',
  empresa: 'Facebook'
}];
var newarr = usuarios.map(function (item) {
  return item.idade;
});
console.log(newarr);
var secarr = usuarios.filter(function (item) {
  return item.idade >= '18' && item.empresa == 'Rocketseat';
});
console.log(secarr);
var terarr = usuarios.find(function (item) {
  return item.empresa == 'Google';
});
console.log(terarr);
var qrarr = usuarios.map(function (item) {
  if (item.idade <= '50') {
    return item;
  }
});
console.log(qrarr);
