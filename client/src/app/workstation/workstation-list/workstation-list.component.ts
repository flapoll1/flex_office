import { Component, OnInit, Input } from '@angular/core';
import { Workstation } from '../workstation.entity';
import { FormGroup, FormControl } from '@angular/forms';
import { startOfDay } from 'date-fns/fp';
import { WorkstationService } from '../workstation.service';
import { startOfToday } from 'date-fns';

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
    this.formDate = startOfToday();
    this.form = new FormGroup({
      selectedDate: new FormControl(this.formDate),
      mouseNeeded: new FormControl(false),
      headsetNeeded: new FormControl(false),
      telephoneNeeded: new FormControl(false)
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


  onChange() {
    this.filteredWorkstations = this.filterByDate(this.workstationList);
    this.filteredWorkstations = this.filterByMouse(this.filteredWorkstations);
    this.filteredWorkstations = this.filterByHeadset(this.filteredWorkstations);
    this.filteredWorkstations = this.filterByTelephone(this.filteredWorkstations);
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
    if (!mouseNeeded || (mouseNeeded === value.mouse)) {
      return true;
    }
    return false;
  }

  filterByMouse(data: Workstation[]) {
    return data.filter(this.hasMouse.bind(this, this.form.value.mouseNeeded));
  }

  hasHeadset(headsetNeeded, value: Workstation) {
    if (!headsetNeeded || (headsetNeeded === value.headset)) {
      return true;
    }
    return false;
  }

  filterByHeadset(data: Workstation[]) {
    return data.filter(this.hasHeadset.bind(this, this.form.value.headsetNeeded));
  }

  hasTelephone(telephoneNeeded, value: Workstation) {
    if (!telephoneNeeded || (telephoneNeeded === value.telephone)) {
      return true;
    }
    return false;
  }

  filterByTelephone(data: Workstation[]) {
    return data.filter(this.hasTelephone.bind(this, this.form.value.telephoneNeeded));
  }


}
