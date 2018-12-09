import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteComponent } from './components/note/note.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { LocalStorageService } from './shared/services/storage.service';
import { NotesRepositoryService } from './shared/services/notes-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    NoteComponent,
    NoteListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    LocalStorageService,
    NotesRepositoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
