import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { Ng2MapModule} from 'ng2-map';
import {SearchComponent} from './search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchAPIService} from './search/search.api.service';
import {HttpModule, JsonpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import { OffClickModule } from 'angular2-off-click';

@NgModule({
    imports: [
        OffClickModule,
        BrowserModule,
        Ng2MapModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        CommonModule
    ],
    declarations: [
        AppComponent,
        MapComponent,
        SearchComponent
    ],
    providers: [SearchAPIService],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
