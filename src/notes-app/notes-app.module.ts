import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteCreateComponent } from './components/note-create/note-create.component';
import { NotesService } from './services/notes.service';
import { UtilsService } from './services/utils.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [LandingPageComponent, NotesListComponent, NoteCreateComponent],
  providers: [UtilsService, NotesService],
  bootstrap: [LandingPageComponent],
})
export class NotesAppModule {}
