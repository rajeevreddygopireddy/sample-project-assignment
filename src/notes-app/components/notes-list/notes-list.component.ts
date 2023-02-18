import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
})
export class NotesListComponent implements OnInit {
  notes$: Observable<any>;
  constructor(private _utilsService: UtilsService) {}

  ngOnInit() {
    this._setSubscribtions();
  }

  private _setSubscribtions(): void {
    this.notes$ = this._utilsService.notes$;
  }
}
