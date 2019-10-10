import { Component, OnInit, Input } from '@angular/core';
import { Workstation } from '../workstation.entity';
import { FormGroup, FormControl } from '@angular/forms';
import { startOfDay } from 'date-fns/fp';

@Component({
  selector: 'app-workstation-list',
  templateUrl: './workstation-list.component.html',
  styleUrls: ['./workstation-list.component.css']
})
export class WorkstationListComponent implements OnInit {
  public form: FormGroup;
  public formDate: Date;
  @Input() workstationList: Workstation[];

  constructor() {
    this.formDate = startOfDay(new Date());
   }

  ngOnInit() {
    this.form = new FormGroup({
      selectedDate: new FormControl(this.formDate)
    });
  }

}
