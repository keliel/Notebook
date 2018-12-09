import { Component } from '@angular/core';

@Component({
  selector: 'nb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  notes: Array<string> = ['test', 'test2'];
  model: string;

  onAdd(newNote: string): void {
    this.notes.push(newNote);
  }
}
