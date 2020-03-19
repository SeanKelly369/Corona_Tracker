import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InfectedInfoComponent } from './Components/infected-info/infected-info.component';
import { IrelandMapComponent } from './Components/ireland-map/ireland-map.component';
import { AppAreaChartComponent } from './app-area-chart/app-area-chart.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    InfectedInfoComponent,
    IrelandMapComponent,
    AppAreaChartComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
