import { Injectable } from '@angular/core';
import { LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { Feature } from '../../../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map!: Map;
  private marcadores: Marker[]=[];

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

  createMarkersFromPlaces(places: Feature[]){
    if(!this.map) console.log('mapa no existe');
    this.marcadores.forEach(marker => marker.remove());

    const newMarkers=[];

    for(let sitio of places){
      const [long, lat] = sitio.center;
      const popUp = new Popup()
        .setHTML(`
          ´<h6>${sitio.text}</h6>
          <span>${sitio.place_name}</span>
          `);
      const newMarker = new Marker()
          .setLngLat([long,lat])
          .setPopup(popUp)
          .addTo(this.map)
    }
  }

}
