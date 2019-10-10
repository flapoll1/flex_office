import { Component } from '@angular/core';
import { Workstation } from './workstation/workstation.entity';
import { startOfDay } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workstations: Workstation[];

  constructor() {
    this.workstations = [
      {id: 0, label: '3.15/1', telephone: true, mouse: true, headset: true, noise: 1, freeDays: ['2019-10-10', '2019-10-11']},
      {id: 1, label: '3.15/2', telephone: false, mouse: true, headset: false, noise: 2, freeDays: ['2019-10-11', '2019-10-11']},
      {id: 2, label: '3.15/3', telephone: true, mouse: false, headset: true, noise: 3, freeDays: ['2019-10-11', '2019-10-10']}
    ];
  }
}
