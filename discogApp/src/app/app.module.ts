import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Form, FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindRecordComponent } from './find-record/find-record.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FindRecordComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [FindRecordComponent]
})
export class AppModule { }
