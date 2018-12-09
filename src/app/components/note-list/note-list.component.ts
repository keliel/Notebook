import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/shared/models/note';

@Component({
  selector: 'nb-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']
})
export class NoteListComponent implements OnInit {

  @Input() noteList: Array<Note>;

  constructor() { }

  ngOnInit() {
  }

}
