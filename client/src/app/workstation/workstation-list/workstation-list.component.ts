import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Workstation } from '../workstation.entity';
import { FormGroup, FormControl } from '@angular/forms';
import { startOfDay, parseISO, compareDesc } from 'date-fns/fp';
import { WorkstationService } from '../workstation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workstation-list',
  templateUrl: './workstation-list.component.html',
  styleUrls: ['./workstation-list.component.css']
})
export class WorkstationListComponent implements OnInit {
  public form: FormGroup;
  public formDate: Date;
  @Input() workstationList: Workstation[];

  constructor(private workstationService: WorkstationService) {
    this.formDate = startOfDay(new Date());
   }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      selectedDate: new FormControl(this.formDate)
    });
  }

  onSubmit() {
    this.workstationService.getAll().subscribe(result => {
      this.workstationList = this.func(result);
    });
   // this.workstationList = this.func(result);
    console.log(this.workstationList);
  }


  /*onSelectDay($event) {
    console.log($event.values);
   /* this.workstationService.getAll().subscribe(result => {
      this.workstationList = this.func(result);
    });
   // this.workstationList = this.func(result);
    console.log(this.workstationList);*/
  //}

  containsDate(selectedDate, value: Workstation) {
    for (let freeDay of value.freeDays) {
      if (freeDay === selectedDate) {
        return true;
      }
    }
    return false;
  }

    func(data: Workstation[]) {
      var filtered = data.filter(this.containsDate.bind(this, this.form.value.selectedDate));
      console.log(this.form.value);
      console.log(filtered);
      return filtered;
      //document.write(filtered);
  }


  /*ngOnChanges() {
    console.log('OnChanges ausgelöst');
    Object.assign(this.formDate, this.form.value);
  }*/

}
