import { Pipe, PipeTransform } from '@angular/core';
import { compareDesc, parseISO } from 'date-fns';

@Pipe({
  name: 'containsSelectedDate'
})
export class ContainsSelectedDatePipe implements PipeTransform {
  transform(dates: string[], selectedDate: Date): boolean {
    for (const date of dates) {
      if (compareDesc(parseISO(date), selectedDate) === 0) {
        return true;
      }
    }
    return false;
  }
}
