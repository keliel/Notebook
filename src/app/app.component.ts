import { Component, OnInit } from '@angular/core';
import { Note } from './shared/models/note';
import { LocalStorageService } from './shared/services/storage.service';

const NOTE_STORAGE_KEY = 'NOTES';

@Component({
  selector: 'nb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  notes: Array<Note> = [];

  constructor(private storageService: LocalStorageService) { }

  ngOnInit(): void {
    const storedNotes = this.storageService.get<Array<Note>>(NOTE_STORAGE_KEY);
    this.notes.push(...storedNotes);
  }

  onAdd(newNoteText: string): void {
    this.notes.push({ text: newNoteText });
    this.storageService.set<Array<Note>>(NOTE_STORAGE_KEY, this.notes);
  }
}
