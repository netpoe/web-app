import { Pipe, PipeTransform } from '@angular/core';

declare var require: any
const ethers = require('ethers')

@Pipe({ name: 'weiToEther', pure: false })

export class WeiToEtherPipe implements PipeTransform {

  constructor() { }

  transform(wei) {
    return ethers.utils.formatEther(wei)
  }
}
