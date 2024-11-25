import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecordsComponent } from './components/list-records/list-records.component';
import { AddRecordComponent } from './components/add-record/add-record.component';
import { EditRecordComponent } from './components/edit-record/edit-record.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRecordsComponent,
    AddRecordComponent,
    EditRecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
