import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/shared/models/note';

@Component({
  selector: 'nb-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.less']
})
export class NoteFormComponent {

  @Input() note: Note;
  @Output() closeEdit = new EventEmitter<Note>();

  constructor() { }

  submit(): void {
    //TODO: Save note, before emitting event to close edit mode.
    this.closeEdit.emit(this.note);
  }
}
