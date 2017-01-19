import { Component, Output } from '@angular/core';
import { Ng2MapComponent } from 'ng2-map';
import '../../public/styles/mapmarker.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 constructor(){
     Ng2MapComponent['apiUrl'] = 'https://maps.google.com/maps/api/js?key=AIzaSyAn2Vrk0zt1W2PGHw56NlLZ8ptcEM0Myo4';
 }

 }
