import { Component, OnInit } from '@angular/core';
import { Workstation } from './workstation/workstation.entity';
import { WorkstationService } from './workstation/workstation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public workstations: Observable<Workstation[]>;

  constructor(private workstationService: WorkstationService) {
  }

  ngOnInit() {
   // this.workstations = this.workstationService.getAll();
  }
}
