/* exercicio 3*/
import Wallet from './class3';

const myWallet = new Wallet();

console.log(`Saldo inicial: ${myWallet.balance}`);

myWallet.removeBalance(50);
console.log(`Saldo após retirada: ${myWallet.balance}`);

myWallet.addBalance(200);
console.log(`Saldo após depósito: ${myWallet.balance}`);

