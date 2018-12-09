import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nb-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.less']
})
export class NoteFormComponent {

  @Input() note: string;
  @Input() addMode = false;
  @Output() closeEdit = new EventEmitter<string>();

  constructor() { }

  submit(): void {
    if (this.note && this.note.length > 0) {
      //TODO: Save note, before emitting event to close edit mode.
      this.closeEdit.emit(this.note);
      this.note = null;
    }
  }
}
