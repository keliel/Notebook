import { Component, Input } from '@angular/core';
import { Note } from 'src/app/shared/models/note';
import { NotesRepositoryService } from 'src/app/shared/services/notes-repository.service';

@Component({
  selector: 'nb-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less']
})
export class NoteComponent {

  @Input() note: Note;
  editMode = false;

  constructor(private repository: NotesRepositoryService) { }

  edit(): void {
    this.editMode = true;
  }

  onEditClose(noteText: string): void {
    this.note.text = noteText;
    this.repository.update(this.note);
    this.editMode = false;
  }
}
