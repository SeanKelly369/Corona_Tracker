import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfectedInfoComponent } from './Components/infected-info/infected-info.component';
import { IrelandMapComponent } from './Components/ireland-map/ireland-map.component';

@NgModule({
  declarations: [
    AppComponent,
    InfectedInfoComponent,
    IrelandMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
