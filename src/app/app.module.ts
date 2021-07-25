import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserGridComponent } from './user-grid/user-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    UserGridComponent,
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
