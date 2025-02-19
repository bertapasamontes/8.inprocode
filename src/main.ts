import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { environment } from './env/environment';

//mapa NO TOCAR!!
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = environment.mapBoxToken;

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  if(!navigator.geolocation){
    alert('Tu dispositivo no tiene geolocalización');
    console.log('Tu dispositivo no tiene geolocalización');
  }
