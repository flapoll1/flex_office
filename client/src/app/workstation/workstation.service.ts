import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Workstation } from './workstation.entity';
import { WORKSTATIONSMOCK } from './workstation.mock';
import { WorkstationModule } from './workstation.module';

@Injectable({
  providedIn: 'root'
})
export class WorkstationService {
  private workstationSubject = new ReplaySubject<Workstation[]>(1);

  constructor() {
    this.workstationSubject.next(WORKSTATIONSMOCK);
   }

   getAll(): Observable<Workstation[]> {
     return this.workstationSubject;
   }
}
