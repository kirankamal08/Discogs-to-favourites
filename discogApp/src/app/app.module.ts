import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Form, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindRecordComponent } from './find-record/find-record.component';

@NgModule({
  declarations: [
    AppComponent,
    FindRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FindRecordComponent]
})
export class AppModule { }
