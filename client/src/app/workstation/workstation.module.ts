import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkstationListComponent } from './workstation-list/workstation-list.component';
import { ContainsSelectedDatePipe } from './contains-selected-date.pipe';

@NgModule({
  declarations: [WorkstationListComponent, ContainsSelectedDatePipe],
  imports: [
    CommonModule
  ],
  exports: [
    WorkstationListComponent
  ]
})
export class WorkstationModule { }
