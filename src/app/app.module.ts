import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { Ng2MapModule} from 'ng2-map';

@NgModule({
  imports: [
    BrowserModule,
    Ng2MapModule
  ],
  declarations: [
    AppComponent,
    MapComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
