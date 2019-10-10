import { Component } from '@angular/core';
import { Workstation } from './workstation/workstation.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workstations: Workstation[];

  constructor() {
    this.workstations = [
      {id: 0, label: '3.15/1', telephone: true, mouse: true, headset: true, noise: 1, freeDays: []},
      {id: 1, label: '3.15/2', telephone: false, mouse: true, headset: false, noise: 2, freeDays: []},
      {id: 2, label: '3.15/3', telephone: true, mouse: false, headset: true, noise: 3, freeDays: []},
    ];
  }
}
