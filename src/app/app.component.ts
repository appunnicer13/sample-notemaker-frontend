import { Component } from '@angular/core';
import { BASE_URL, API_VERSION } from './shared/base.urls';
import { LoopBackConfig } from './shared/sdk';
import { Note, FireLoopRef } from './shared/sdk/models';
import { RealTime } from './shared/sdk/services';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Note App';

  public reference : FireLoopRef<Note>;
  public notes: Observable<Note | Note[]>;


  constructor(private realTime: RealTime) {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);

    this.realTime
      .onReady()
      .subscribe(() => {
          this.reference = this.realTime.FireLoop.ref<Note>(Note);
          this.notes = this.reference.on('change');
        }
      );
  }



}
