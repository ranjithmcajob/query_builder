import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueryBuilderModule } from 'angular2-query-builder';
import { HttpClientModule } from '@angular/common/http';

// Service Imports
import { FieldsService } from './fields.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    QueryBuilderModule,
    ReactiveFormsModule
  ],
  providers: [
    FieldsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
