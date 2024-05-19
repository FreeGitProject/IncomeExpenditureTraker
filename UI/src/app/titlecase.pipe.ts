import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitlecase',
  standalone: true,
})
export class CustomTitlecasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.replace(/\w\S*/g, (txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
  }
}
