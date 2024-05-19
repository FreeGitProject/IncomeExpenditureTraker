import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
  standalone: true
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, format: string = 'YYYY-MMM-dd'): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);

    if (isNaN(date.getTime())) {
      return value;
    }

    const day = this.padZero(date.getDate());
    const year = date.getFullYear();
    const month = this.getMonthAbbreviation(date.getMonth());

    switch (format) {
      case 'YYYY-MMM-dd':
        return `${day}-${month}-${year}`;
      case 'dd':
        return `${day}`;
      default:
        return value;
    }
  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  private getMonthAbbreviation(monthIndex: number): string {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[monthIndex];
  }
}
