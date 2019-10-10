import { Pipe, PipeTransform } from '@angular/core';
import { compareDesc, parse, startOfDay, parseISO } from 'date-fns';

@Pipe({
  name: 'containsSelectedDate'
})
export class ContainsSelectedDatePipe implements PipeTransform {
  transform(dates: string[], selectedDate: Date): boolean {
    // console.log(today);
   // console.log(parseISO(dates[0]));
  //  console.log(startOfDay(parseISO(dates[0])));
   // console.log(compareDesc(startOfDay(parseISO(dates[0])), today));
    for (let i = 0; i < dates.length; i++) {
      console.log('Selected Date' + selectedDate);
      console.log(dates[i]);
      if (compareDesc(parseISO(dates[i]), selectedDate) === 0) {
        console.log('Test1');
        return true;
      }
    }
    console.log('Test2');
    return false;
  }
}
