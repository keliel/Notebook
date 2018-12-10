import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/app/shared/models/note';
import { SortMode } from './sort-mode.enum';

@Component({
  selector: 'nb-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']
})
export class NoteListComponent implements OnInit {

  @Input() noteList: Array<Note>;
  @Output() removeNote = new EventEmitter<Note>();
  sortModeValues = SortMode;
  sortModes: Array<string> = Object.keys(SortMode);
  currentSortMode = SortMode.Ascending;

  ngOnInit() {
    this.sortNotesList(this.currentSortMode);
  }

  onNoteRemove(noteToRemove: Note): void {
    this.removeNote.emit(noteToRemove);
  }

  onSortChanged(sortMode: SortMode): void {
    this.currentSortMode = sortMode;
    this.sortNotesList(this.currentSortMode);
  }

  private sortNotesList(sortMode: SortMode): void {
    let sortingFn = (() => {
      switch (sortMode) {
        case SortMode.Ascending:
          return this.sortByAsc;
        case SortMode.Descending:
          return this.sortByDesc;
        default:
          return this.sortByAsc;
      }
    })();
    this.noteList.sort(sortingFn);
  }

  private sortByAsc(a: Note, b: Note) {
    return a.text.localeCompare(b.text);
  }

  private sortByDesc(a: Note, b: Note) {
    return b.text.localeCompare(a.text);
  }

}
