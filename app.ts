import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PJAccount } from './class/PJAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 200, 'Wand', 10, true)
let valorSaque: number = 10;
let valorDeposito:number = 10

console.log(`/////////////////////////////////////////////////////////////////////////////// \n`)
console.log(`////////////////CONTA PESSOA FISICA///////////////////////////////// \n`)
//Condições para saque
if(peopleAccount.getStatus() && peopleAccount.withdraw(valorSaque) > 0){
    console.log(`Após o saque o valor que era ${peopleAccount.balanceValor} ficarám em : ${peopleAccount.withdraw(valorSaque)}`)
}else{
    console.log("Não há saldo suficiente para saque");
}
//Depósito
console.log(`Após o depósito o valor que era ${peopleAccount.balanceValor} ficarão : ${peopleAccount.deposit(valorDeposito)}`)
console.log(`/////////////////////////////////////////////////////////////////////////////// \n`)



console.log(`/////////////////////////////////////////////////////////////////////////////// \n`)
console.log(`////////////////CONTA PESSOA EMPRESA///////////////////////////////// \n`)
const companyAccount: CompanyAccount = new CompanyAccount('Mircrocop', 20, true)
//aqui setamos o valor do emprestimo
companyAccount.setLoan(100);
//verificar se pode ser feito o emprestimo
if (companyAccount.getStatus()) {
    console.log(`O valor do emprestimo ficará em ${companyAccount.getLoan()}`)    
}else{
    console.log(`Emprestimo não disponível!`)
}
console.log(`/////////////////////////////////////////////////////////////////////////////// \n`)


console.log(`/////////////////////////////////////////////////////////////////////////////// \n`)
console.log(`////////////////CONTA PJ///////////////////////////////// \n`)
const PjAccount: PJAccount = new PJAccount('Mircrocop', 10, true)
//aqui setamos o valor do emprestimo
PjAccount.setLoan(100);
if (PjAccount.getStatus()) {
    console.log(`O valor do emprestimo para PJ ficará em ${PjAccount.getLoan()}`)    
}else{
    console.log(`Emprestimo não disponível!`)
}

console.log(`/////////////////////////////////////////////////////////////////////////////// \n`)
