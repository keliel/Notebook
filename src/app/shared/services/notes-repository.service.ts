import { Injectable } from '@angular/core';
import { UUID as UuidService } from 'angular2-uuid';
import { Note } from '../models/note';
import { LocalStorageService } from './storage.service';

const NOTE_STORAGE_KEY = 'NOTES';

@Injectable({
  providedIn: 'root'
})
export class NotesRepositoryService {

  constructor(private storageService: LocalStorageService) { }

  /**
   * Creates a new note and inserts it into local storage.
   * @param text The text for the note.
   * @returns The updated stored notes.
   */
  create(text: string): Note {
    let storedNotes = this.getAll();
    const newNote = {
      text: text,
      id: UuidService.UUID()
    };
    storedNotes.push(newNote);
    this.updateNotesStorage(storedNotes);
    return newNote;
  }

  /**
   * Retrieves all notes and returns them.
   */
  getAll(): Array<Note> {
    return this.storageService.get<Array<Note>>(NOTE_STORAGE_KEY);
  }

  /**
   * Retrieves the note identified by the provided ID.
   * @param id ID of the note to retrieve
   */
  get(id: string): Note {
    const storedNotes = this.storageService.get<Array<Note>>(NOTE_STORAGE_KEY);
    return storedNotes.find(x => x.id === id);
  }

  /**
   * Inserts the note value in place of one with the same ID.
   * @param note The note to update.
   * @returns The updated note.
   */
  update(note: Note): Note {
    let storedNotes = this.getAll();
    const storedNoteIndex = storedNotes.indexOf(storedNotes.find(x => x.id === note.id));
    storedNotes[storedNoteIndex] = note;
    this.updateNotesStorage(storedNotes);
    return storedNotes[storedNoteIndex];
  }

  /**
   * Deletes the note with the specified ID.
   * @param id ID of the note to delete.
   * @returns The removed note.
   */
  delete(id: string): Note {
    let storedNotes = this.getAll();
    const storedNoteIndex = storedNotes.indexOf(storedNotes.find(x => x.id === id));
    const deletedNote = storedNotes.splice(storedNoteIndex, 1)[0];
    this.updateNotesStorage(storedNotes);
    return deletedNote;
  }

  /**
   * Shorthand to update the notes array in local storage.
   * @param value The updated storage value.
   */
  private updateNotesStorage(value: Array<Note>) {
    this.storageService.set<Array<Note>>(NOTE_STORAGE_KEY, value);
  }
}
