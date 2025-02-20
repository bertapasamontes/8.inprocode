import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;

  get isMapReady(){
    return !!this.map; //si tiene algun valor el map, devolverá true, si no, false.
  }

  setMap(map: Map){
    this.map = map; //establecemos que el valor de mi mapa es el mapa.
  }

  //mover el mapa a cualquier sitio de la pantalla desde nuestro servicio
  flyTo(coords: LngLatLike){ //recibe un objeto que tenga longitud y latitud
    if(!this.isMapReady){
      console.log('El mapa no está inicializado');
    }

    this.map?.flyTo({
      zoom: 14,
      center: coords
    })
  }


}
