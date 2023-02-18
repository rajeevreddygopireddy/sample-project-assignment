import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css'],
})
export class NoteCreateComponent implements OnInit {
  public notesFormGroup: FormGroup;
  constructor() {}

  ngOnInit() {
    this._initFormGroup();
  }
  private _initFormGroup(): void {
    this.notesFormGroup = new FormGroup({
      tittle: new FormControl(''),
      description: new FormControl(''),
    });
  }
}
