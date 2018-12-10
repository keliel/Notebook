import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/shared/models/note';
import { NotesRepositoryService } from 'src/app/shared/services/notes-repository.service';

@Component({
  selector: 'nb-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less']
})
export class NoteComponent {

  @Input() note: Note;
  @Output() removeNote = new EventEmitter<Note>();
  editMode = false;

  constructor(private repository: NotesRepositoryService) { }

  edit(): void {
    this.editMode = true;
  }

  closeEdit(): void {
    this.editMode = false;
  }

  onEditClose(noteText: string): void {
    this.note.text = noteText;
    this.repository.update(this.note);
    this.closeEdit();
  }

  remove(): void {
    this.removeNote.emit(this.note);
  }
}
