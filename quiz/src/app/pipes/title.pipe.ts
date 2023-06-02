import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title',
})
export class TitlePipe implements PipeTransform {
  transform(value: number | undefined): any {
    if (!value) {
      return null;
    }

    if (value <= 1) {
      return ' Słabo próbuj dalej';
    } else if (value > 2 && value <= 4) {
      return ' Brawo, ale może być lepiej';
    } else {
      return ' Genialnie, no lepiej już nie będzie';
    }
  }
}
