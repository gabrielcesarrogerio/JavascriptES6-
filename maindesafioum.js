class usuario{
    constructor (){
        this.email = [];
        this.senha = [];
        this.admin = false;
    }
        add(email, senha){
            this.email.push(email);
            this.senha.push(senha);
            
        }
        isadmin(){
            if(this.admin==false){
                console.log('false');
            }else{
                console.log('true');
            }
        }
        
}

class admin extends usuario{
    constructor(){
        super();
        this.admin = true;
    }
    addadmin(emailadmin, senhaadmin){
        this.email.push(emailadmin);
        this.senha.push(senhaadmin);
        
    }
    

}

const user1 = new usuario ('email@teste.com', 'senha123');
const adm1 = new admin ('email@teste.com', 'senha123');

console.log(user1.isadmin());
console.log(adm1.isadmin())