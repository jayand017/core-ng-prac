import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddNinjaComponent } from './add-ninja/add-ninja.component';
import { ListNinjaComponent } from './list-ninja/list-ninja.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNinjaComponent,
    ListNinjaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
