import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkstationListComponent } from './workstation-list/workstation-list.component';
import { ContainsSelectedDatePipe } from './contains-selected-date.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WorkstationListComponent, ContainsSelectedDatePipe],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    WorkstationListComponent
  ]
})
export class WorkstationModule { }
