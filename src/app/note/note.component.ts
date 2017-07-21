import { Component,Input } from '@angular/core';
import { Note,FireLoopRef } from '../shared/sdk/models';


@Component({
  selector: 'note-detail',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteDetailComponent {
  @Input('fill') note: Note;
  public mode : string;
  @Input('note-ref') reference : FireLoopRef<Note>;
  constructor() {
    this.mode = 'view';
  }
  edit_mode(): void{
    this.mode = 'edit';
  }
  update(note: Note): void {
    this.reference.upsert(this.note).subscribe();
  }

  remove(note : Note): void {
    this.reference.remove(this.note).subscribe();
  }

}
