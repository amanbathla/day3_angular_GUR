import { Pipe, PipeTransform } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Pipe({
  name: 'reverseText'
})
export class ReverseTextPipe implements PipeTransform {

  transform(value: string, args?: any): string {

    if(!value){
      return '';
    }
   return value.split('').reverse().join('');
    
  }

}
