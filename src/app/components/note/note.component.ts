import { Component, Input } from '@angular/core';
import { Note } from 'src/app/shared/models/note';

@Component({
  selector: 'nb-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less']
})
export class NoteComponent {

  @Input() note: Note;

  editMode = false;

  edit(): void {
    this.editMode = true;
  }

  onEditClose(noteText: string): void {
    this.editMode = false;
    this.note.text = noteText;
  }
}
