import { Injectable, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class UtilsService implements OnDestroy {

  private _notes$ = new ReplaySubject(1);
  public notes$ =  this._notes$.asObservable();
  constructor() { }

  public setNotes(notes: any): void{
    this._notes$.next(notes);
  }

  public ngOnDestroy(): void{
    this._notes$.complete();
  }

}