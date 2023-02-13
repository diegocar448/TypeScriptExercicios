import { DioAccount } from "./DioAccount"

export class PJAccount extends DioAccount {
    valorEmprestimo: number = 10;

  constructor(name: string, accountNumber: number, status:boolean){
    super(name, accountNumber, status)    
    this.valorEmprestimo = this.valorEmprestimo
  }

  getLoan = (): number => {
    return this.valorEmprestimo + 10;
  }
  setLoan = (valor:number): number => {
    return this.getStatus() === true ? this.valorEmprestimo = valor : 0 ;
  }
}