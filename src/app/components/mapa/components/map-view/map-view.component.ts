import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { PlacesService } from '../../../../services/mapa/places/places-service.service';
import * as mapbox from 'mapbox-gl';
import { MapService } from '../../../../services/mapa/map/map.service';


@Component({
  selector: 'app-map-view',
  imports: [],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss'
})
export class MapViewComponent {

  @ViewChild('mapDiv') mapDivElement!: ElementRef; //referencia al mapa

  constructor(
    private _placesService: PlacesService,
    private _mapService: MapService
  ){}

  // ngOnInit(){
  //   console.log("mi localización: ",this._placesService.userLocation);
  // }

  ngAfterViewInit(){
    if(!this._placesService.userLocation) console.log('no hay ubi del user');

    const map = new mapbox.Map({
      container: this.mapDivElement.nativeElement, // elemento HTML donde quiero que renderice el mapa
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this._placesService.userLocation, // starting position [lng, lat] = centro del mapa = mi ubicación
      zoom: 14, // starting zoom
    });

    console.log(map);

    //pop up
    const popUp = new mapbox.Popup()
      .setHTML(`
        <h6>Aqui toy yo</h6>
        <span>Estoy aquiiii</span>
      `);
    
    //crear nuevo marcador
    new mapbox.Marker({ color: 'orange'})
        .setLngLat(this._placesService.userLocation!) //dónde aparece
        .setPopup(popUp) //colocamos el popUp
        .addTo(map) //lo añadimos al mapa

        
    //inicilizamos mapa, establecemos el servicio y ya tenemos acceso global a él.
      this._mapService.setMap(map);

  }

  
}
