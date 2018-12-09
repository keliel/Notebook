import { Component, Input } from '@angular/core';
import { Note } from 'src/app/shared/models/note';
import { LocalStorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'nb-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.less']
})
export class NoteComponent {

  @Input() note: Note;
  editMode = false;

  constructor(private storageService: LocalStorageService) { }

  edit(): void {
    this.editMode = true;
  }

  onEditClose(noteText: string): void {
    this.editMode = false;
    this.note.text = noteText;

    // Update in local storage
    let storedNotes = this.storageService.get<Array<Note>>('NOTES');
    const storedNoteIndex = storedNotes.indexOf(storedNotes.find(x => x.id === this.note.id));
    storedNotes[storedNoteIndex] = this.note;
    this.storageService.set<Array<Note>>('NOTES', storedNotes);
  }
}
