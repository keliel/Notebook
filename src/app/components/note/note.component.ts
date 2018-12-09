import { Component, Input } from '@angular/core';

@Component({
  selector: 'nb-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less']
})
export class NoteComponent {

  @Input() model: string;

  editMode = false;

  edit(): void {
    this.editMode = true;
  }
}
