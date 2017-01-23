import { Component, Output } from '@angular/core';
import { Ng2MapComponent } from 'ng2-map';
import '../../public/styles/mapmarker.css';
import {API_URL} from './common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(){
     Ng2MapComponent['apiUrl'] = API_URL;
 }

 }
