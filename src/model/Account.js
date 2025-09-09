export class Account{

    constructor() {
        console.log("New Account Created");
        this.balance = 0;
    }

    makeCredit(amount){
        this.balance += amount;
        console.log(`Credited: ${amount}. New Balance: ${this.balance}`);
    }
}