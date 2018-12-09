import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'nb-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.less']
})
export class NoteFormComponent implements OnInit {

  @Input() note: string;
  @Input() addMode = false;
  @Output() closeEdit = new EventEmitter<string>();

  model: string;

  constructor() { }

  ngOnInit(): void {
    this.model = this.note;
  }

  /**
   * Submit current input, if there is any change.
   * Definitely emit closeEdit event.
   */
  submit(): void {
    let result = this.note;
    let trimmedInput = this.model ? this.model.trim() : '';

    // Check if there is input and if it is different from before
    if (trimmedInput.length > 0 && trimmedInput !== this.note) {
      //TODO: Save note, before emitting event to close edit mode.
      result = trimmedInput;
    }
    if (result) {
      this.closeEdit.emit(result);
    }
    this.model = null;
  }
}
