import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nb-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.less']
})
export class NoteListComponent implements OnInit {

  @Input() noteList: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
