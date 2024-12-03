// function CreateBank(bankName,bankcode,bankaddress,bankbranch,helpline,numofAtm,addUser,userCount) {
//     this.bankName = bankName
//     this.bankcode = bankcode
//     this.bankaddress = bankaddress
//     this.bankbranch = bankbranch
//     this.helpline = helpline
//     this.numofAtm = numofAtm
//     this.listofuser = []
//     this.userCount = 0
//     this.userbalance =  function(userId){
//        let data =  this.listofuser.find(user=>user.userid === userId)
//             // return `${data.username} ${data.balance}`;
//             return  data.balance   
//     }
//     this.userdepoist = function(userid,amount) {
//         let data =  this.listofuser.find(user=>user.userid === userid)
//             if(!data){
//                 return "account not exist"
//             }
//             data.balance += amount
//             return `total balance ${data.balance}`
//     }

//     this.totalbalanceinbank  = function (){
//         let total = 0
//         for(let user of this.listofuser){
//             total += user.balance
//         }
//         return total;

//     }
//     this.userwithdrawal =  function(userid,amount){
//         let data = this.listofuser.find(user=>user.userid === userid)
//         if(!data){
//             return "account dont exist"
//         }
//         if(data.balance > amount){
//             return `withdrwal balance is ${data.balance - amount}`
//         }
//         if(data.balance < amount){
//             return `teri maa chord kar gyi thi ya teri Baap`
//         }
//     }
//     this.userstatus = function(){

//     }
//     this.addUser = function(username,userRole,email,phone,dob,address,gender,balance) {
//         userAccountNumber = Date.now();
//         userid = ++ this.userCount;
//         let user = new CreateBankUser(username,userid,userRole,email,phone,dob,address,gender,userAccountNumber,balance)
//         this.listofuser.push(user)
//     }

// }

// function CreateBankUser(username,userid,userRole,email,phone,dob,address,gender,userAccountNumber,balance) {
//     this.username =  username
//     this.userid = userid
//     this.userRole =  userRole;
//     this.email =  email
//     this.phone = phone 
//     this.gender = gender 
//     this.dob =  dob  
//     this.address = address
//     this.userAccountNumber = userAccountNumber
//     this.balance = balance
// }


// const PritamBank = new CreateBank("Pritam Bank","9034","Abc street","Tilak Nagar","011-56875334",0) 
// PritamBank.addUser("nandani","Customer","abc454","9877347377437","09/09/2003","abfdf","female",100)
// PritamBank.addUser("Dev","bikhari","devbikhari@gmail.com","90865433343","04/08/2004","Abcfhdjhf","Male",900)

// console.log(PritamBank);

// console.log(PritamBank.userbalance(1));
// console.log(PritamBank.userdepoist(1,1000));
// console.log(PritamBank.userbalance(2));
// console.log(PritamBank.userdepoist(2,900));
// console.log(PritamBank.userwithdrawal(1,200400440));
// // console.log(PritamBank.totalbalanceinbank());

// class Human {
//     constructor(name,lifespam,Gender,Color,Weight,Height) {
//         this.name = name;
//         this.lifespam = lifespam;
//         this.Gender = Gender;
//         this.Color = Color;
//         this.Weight = Weight;
//         this.Height = Height;
//     }
//     Walking() {
//         return `${this.name} is walking at 20 kmph`
//     }
//     running(){
//         return `${this.name} is running at 30 kmph`
//     }
//     sleeping(){
//         return `${this.name} is sleeping`
//     }
//     eating(){
//         return `${this.name} is eating`
//     }
// }

// class SuperHuman extends Human{
//         constructor(Power,name,lifespam,Gender,Color,Weight,Height)
//         {
//             super(name,lifespam,Gender,Color,Weight,Height)
//             this.Power = Power
//         }
//         flying(){
//             return `${this.name} is flying at 100 kmph`
//         }
//         fastRun(){
//             return `${this.name} has superpower`
//         }
// }

// let Dev = new Human(`dev`,200,`male`,`white`,70,5.11);
// console.log(Dev.running());
// console.log(Dev.eating());
// console.log(Dev.sleeping());
// console.log(Dev.Walking()); 
// let Superman = new SuperHuman(10000,`Superman`,40000,`male`,'brown',9000,9);
// console.log(Superman.flying());

class Animal {
    constructor(name,age,species,legs) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.legs = legs;
    }
    eating(){
        return `${this.name} is eating`
    }
    sleeping(){
        return `${this.name} is sleeping`
    }
    walking(){
        return `${this.name} is walking`
    }
}
let lion = new Animal(`lion`,9000,`land Animal`,4)

console.log(lion);
class Dog extends Animal{
    constructor(name,age,smell,legs){
        super(name,age)
            this.name = name;
            this.age = age;
            this.smell = smell;
    }
    barking(){
        return `${this.name} is barking`
    }
}
let Dog1 = new Dog(`dog`,9000,`land Animal`,4)
console.log(Dog1.barking());