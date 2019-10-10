import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Workstation } from "../workstation.entity";
import { FormGroup, FormControl } from "@angular/forms";
import { startOfDay, parseISO, compareDesc } from "date-fns/fp";
import { WorkstationService } from "../workstation.service";
import { Observable } from "rxjs";
import { ValueConverter } from "@angular/compiler/src/render3/view/template";

@Component({
  selector: "app-workstation-list",
  templateUrl: "./workstation-list.component.html",
  styleUrls: ["./workstation-list.component.css"]
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

  /*To DO:
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }*/

  onSubmit() {
    this.filteredWorkstations = this.filterByDate(this.workstationList);
    this.filteredWorkstations = this.filterByMouse(this.filteredWorkstations);

    // this.workstationList = this.func(result);
    console.log(this.workstationList);
  }

  onChange(event) {
    this.filteredWorkstations = this.filterByDate(this.workstationList);
    this.filteredWorkstations = this.filterByMouse(this.filteredWorkstations);
  }

  containsDate(selectedDate, value: Workstation) {
    for (let freeDay of value.freeDays) {
      if (freeDay === selectedDate) {
        return true;
      }
    }
    return false;
  }

  filterByDate(data: Workstation[]): Workstation[] {
    var filtered = data.filter(
      this.containsDate.bind(this, this.form.value.selectedDate)
    );
    return filtered;
    //document.write(filtered);
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

  /*ngOnChanges() {
    console.log('OnChanges ausgelöst');
    Object.assign(this.formDate, this.form.value);
  }*/
}
