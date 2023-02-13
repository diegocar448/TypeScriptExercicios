export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 10
  private status: boolean = true
  

  constructor(name: string, accountNumber: number, status:boolean){
    this.name = name
    this.accountNumber = accountNumber
    this.status = status    
  }

  setName = (name: string): string => {
    return this.name = name    
  }

  getName = (): string => {
    return this.name
  }

  getStatus = (): boolean => {
    return this.status    
  }
  setStatus = (status:boolean): boolean => {
    return this.status = status;
  }
  

  deposit = (valor: number): number => {    
    if(this.validateStatus()){            
      return this.balance + valor;      
    }else{
      return 0;
    }
  }

  withdraw = (valor: number): number => {    
    return this.balance - valor <= 0 && this.status === true ? 0  : this.balance - valor;    
  }

  getBalance = (): number => {
    return this.balance;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
