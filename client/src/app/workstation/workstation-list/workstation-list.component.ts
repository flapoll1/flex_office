import { Component, OnInit, Input } from '@angular/core';
import { Workstation } from '../workstation.entity';

@Component({
  selector: 'app-workstation-list',
  templateUrl: './workstation-list.component.html',
  styleUrls: ['./workstation-list.component.css']
})
export class WorkstationListComponent implements OnInit {
  @Input() workstationList: Workstation[];

  constructor() { }

  ngOnInit() {
  }

}
