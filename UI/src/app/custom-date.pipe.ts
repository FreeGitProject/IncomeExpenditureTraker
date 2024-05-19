import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate',
  standalone: true
})
// export class CustomDatePipe implements PipeTransform {

//   transform(value: any, format: string = 'YYYY-MM-dd'): string {
//     if (!value) {
//       return '';
//     }
    
//     const date = new Date(value);

//     if (isNaN(date.getTime())) {
//       return value;
//     }

//     const options: Intl.DateTimeFormatOptions = this.getDateFormatOptions(format);

//     return new Intl.DateTimeFormat('en-US', options).format(date);
//   }

//   private getDateFormatOptions(format: string): Intl.DateTimeFormatOptions {
//     const formatOptions: { [key: string]: Intl.DateTimeFormatOptions } = {
//       'YYYY-MM-dd': { year: 'numeric', month: '2-digit', day: '2-digit' },
//       // Add more formats as needed
//     };

//     return formatOptions[format] || {};
//   }
// }
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

    if (format === 'YYYY-MMM-dd') {
      return `${day}-${month}-${year}`;
    }

    return value;
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
