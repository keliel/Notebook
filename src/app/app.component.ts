import { Component, OnInit } from '@angular/core';
import { Note } from './shared/models/note';
import { NotesRepositoryService } from './shared/services/notes-repository.service';

@Component({
  selector: 'nb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  notes: Array<Note> = [];

  constructor(private repository: NotesRepositoryService) { }

  ngOnInit(): void {
    const storedNotes = this.repository.getAll();
    this.notes.push(...storedNotes);
  }

  onAdd(newNoteText: string): void {
    this.notes.unshift(this.repository.create(newNoteText));
  }
}
