import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nb-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']
})
export class NoteListComponent implements OnInit {

  notes: Array<string> = ['test', 'test2'];

  constructor() { }

  ngOnInit() {
  }

}
