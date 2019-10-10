import { Component, OnInit, Input } from '@angular/core';
import { Workstation } from '../workstation.entity';
import { FormGroup, FormControl } from '@angular/forms';
import { startOfDay } from 'date-fns/fp';
import { WorkstationService } from '../workstation.service';

@Component({
  selector: 'app-workstation-list',
  templateUrl: './workstation-list.component.html',
  styleUrls: ['./workstation-list.component.css']
})
export class WorkstationListComponent implements OnInit {
  public form: FormGroup;
  public formDate: Date;
  public filteredWorkstations: Workstation[];
  @Input() workstationList: Workstation[];

  constructor(private workstationService: WorkstationService) {
    this.formDate = startOfDay(new Date());
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      selectedDate: new FormControl(this.formDate),
      mouseNeeded: new FormControl(false)
    });
    this.workstationService
      .getAll()
      .subscribe((result: Workstation[]) => {this.workstationList = result; });
  }

  /* @To DO:
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }*/

  onSubmit() {
    this.filteredWorkstations = this.filterByDate(this.workstationList);
    this.filteredWorkstations = this.filterByMouse(this.filteredWorkstations);
  }

  onChange() {
    this.filteredWorkstations = this.filterByDate(this.workstationList);
    this.filteredWorkstations = this.filterByMouse(this.filteredWorkstations);
  }

  containsDate(selectedDate, value: Workstation) {
    for (const freeDay of value.freeDays) {
      if (freeDay === selectedDate) {
        return true;
      }
    }
    return false;
  }

  filterByDate(data: Workstation[]): Workstation[] {
    return data.filter(this.containsDate.bind(this, this.form.value.selectedDate));
  }

  hasMouse(mouseNeeded, value: Workstation) {
    if (mouseNeeded === value.mouse) {
      return true;
    }
    return false;
  }

  filterByMouse(data: Workstation[]) {
    return data.filter(this.hasMouse.bind(this, this.form.value.mouseNeeded));
  }


}
