import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkstationListComponent } from './workstation-list/workstation-list.component';

@NgModule({
  declarations: [WorkstationListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WorkstationListComponent
  ]
})
export class WorkstationModule { }
