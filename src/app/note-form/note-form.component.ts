import { Component,Input } from '@angular/core';
import { Note,FireLoopRef } from '../shared/sdk/models';


@Component({
  selector: 'note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  private note: Note = new Note();
  @Input('note-ref') reference : FireLoopRef<Note>;
  constructor() {}

  add(): void {
    this.reference.create(this.note).subscribe(() => this.note = new Note());
  }

}
