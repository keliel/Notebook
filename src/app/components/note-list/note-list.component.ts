import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/models/note';

@Component({
  selector: 'nb-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']
})
export class NoteListComponent implements OnInit {

  notes: Array<Note> = [{ text: 'Sample Note 1' }, { text: 'Sample Note 2' }];

  constructor() { }

  ngOnInit() {
  }

}
