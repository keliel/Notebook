import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/models/note';

@Component({
  selector: 'nb-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.less']
})
export class NoteFormComponent implements OnInit {

  @Input() note: Note;
  @Input() addMode = false;
  @Output() closeEdit = new EventEmitter<Note>();

  private originalValue;
  model: string;

  constructor() { }

  ngOnInit(): void {
    this.originalValue = this.note.text;
    this.model = this.originalValue;
  }

  /**
   * Submit current input, if there is any change.
   * Definitely emit closeEdit event.
   */
  submit(): void {
    let result = this.originalValue;
    let trimmedInput = this.model ? this.model.trim() : '';

    // Check if there is input and if it is different from before
    if (trimmedInput.length > 0 && trimmedInput !== this.originalValue) {
      //TODO: Save note, before emitting event to close edit mode.
      result = trimmedInput;
    }
    if (result) {
      this.closeEdit.emit(result);
    }
    this.model = null;
  }
}
