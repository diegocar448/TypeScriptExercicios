import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  
  valorEmprestimo: number = 0;

  constructor(name: string, accountNumber: number, status:boolean){
    super(name, accountNumber, status)
    this.valorEmprestimo = this.valorEmprestimo
  }

  getLoan = (): number => {
    return this.valorEmprestimo;
  }
  setLoan = (valor:number): number => {
    return this.getStatus() === true ? this.valorEmprestimo = valor : 0 ;
  }

  
}
