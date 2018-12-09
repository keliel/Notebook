import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { NoteComponent } from './components/note/note.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { LocalStorageService } from './shared/services/storage.service';

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
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
