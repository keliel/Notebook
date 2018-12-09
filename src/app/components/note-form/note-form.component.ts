import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nb-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.less']
})
export class NoteFormComponent implements OnInit {

  @Input() editNote: string;

  constructor() { }

  ngOnInit() {
  }

}
