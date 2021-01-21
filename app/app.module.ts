import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from './examples/popup-modal/popup-modal.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule,   FormsModule , NgbModule.forRoot()],
  declarations: [ AppComponent, PopupModalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
