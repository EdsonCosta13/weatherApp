import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponentComponent } from './components/weather-component/weather-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
