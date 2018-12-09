import { Component } from '@angular/core';
import { Note } from './shared/models/note';

@Component({
  selector: 'nb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  notes: Array<Note> = [];

  onAdd(newNoteText: string): void {
    this.notes.push({ text: newNoteText });
  }
}
