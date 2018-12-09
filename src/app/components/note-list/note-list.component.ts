import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/shared/models/note';
import { SortMode } from './sort-mode.enum';

@Component({
  selector: 'nb-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']
})
export class NoteListComponent implements OnInit {

  @Input() noteList: Array<Note>;
  sortModeValues = SortMode;
  sortModes : Array<string> = Object.keys(SortMode);
  currentSortMode = SortMode.Ascending;

  constructor() { }

  ngOnInit() {
  }

}
