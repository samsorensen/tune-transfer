import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translator',
  standalone: true
})
export class TranslatorPipe implements PipeTransform {

  transform(englishText: string, lang: string): string {
    return 'pipe-res';
  }

}
