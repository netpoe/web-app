import { Contract } from '@model/contract.model';
import * as SimpleCrowdsaleInterface from '@abi/simplecrowdsale.abi.json';

declare var require: any

export class SimpleCrowdsale extends Contract {


  // constructor(
  //   interface: any,
  //   address: string,
  //   wallet: Wallet){

  //   this.connect(interface.abi, wallet.provider)

  // }

  // async connect(abi: any, provider: any){
  //   let c = contract({abi: abi})

  //   c.setProvider(provider)

  //   return c.at(this.contractAddress).then(instance => {

  //     console.log(instance)
  //     this.CanSignContract = instance
  //     this.onContractInstanceReady.next(instance)
  //   }).catch(error => console.log(error))
  // }

}