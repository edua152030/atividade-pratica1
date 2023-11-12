export default class Wallet {
    balance: number = 1000;
  
    removeBalance(withdraw: number): void {
      this.balance -= withdraw;
    }
  
    addBalance(deposit: number): void {
      this.balance += deposit;
    }
  }