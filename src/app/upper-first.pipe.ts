import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirst',
  standalone: true
})
export class UpperFirstPipe implements PipeTransform {

  transform(value: string): string {
    return value[0].toLocaleUpperCase() + value.substring(1);
  }

}
