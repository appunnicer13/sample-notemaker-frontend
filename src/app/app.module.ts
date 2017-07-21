import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SDKBrowserModule } from './shared/sdk/index';
import { MdCardModule,MdButtonModule,MdIconRegistry,MdInputModule,MdGridListModule,MdToolbarModule } from '@angular/material';
import { NoteDetailComponent } from './note/note.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteDetailComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SDKBrowserModule.forRoot(),
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdGridListModule,
    MdToolbarModule,
    BrowserAnimationsModule
],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})

export class AppModule { }
