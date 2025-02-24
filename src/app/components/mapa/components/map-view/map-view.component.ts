import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { PlacesService } from '../../../../services/mapa/places/places-service.service';
import * as mapbox from 'mapbox-gl';
import { MapService } from '../../../../services/mapa/map/map.service';
import { MapGlobalService } from '../../../../services/mapa/map-global.service';


@Component({
  selector: 'app-map-view',
  imports: [],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss'
})
export class MapViewComponent {

  @ViewChild('mapDiv') mapDivElement!: ElementRef; //referencia al mapa
  map!: mapbox.Map; 

  sitiosPorCategoria:any = {}
  markers: mapbox.Marker[] = [];
  categoriasSeleccionadas: string[] = []; //categ q pilla el user
  categorias: string[] = [] //todas las categorias q hay


  constructor(
    private _placesService: PlacesService,
    private _mapService: MapService,
    private _mapGlobal: MapGlobalService
  ){}

  ngAfterViewInit(){
    if(!this._placesService.userLocation) console.log('no hay ubi del user');

    this.map = new mapbox.Map({
      container: this.mapDivElement.nativeElement, // elemento HTML donde quiero que renderice el mapa
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this._placesService.userLocation, // starting position [lng, lat] = centro del mapa = mi ubicación
      zoom: 14, // starting zoom
    });

    console.log(this.map);

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
      .addTo(this.map) //lo añadimos al mapa

        
    //inicilizamos mapa, establecemos el servicio y ya tenemos acceso global a él.
      this._mapService.setMap(this.map);

      this.getListPlaces();
  }
  
  getListPlaces() {
    this._mapGlobal.getListPlaces().subscribe((data: any[])=>{ 
    data.forEach((sitio)=>{
      sitio.category.forEach((categoria: string) => {
        if(!this.sitiosPorCategoria[categoria]){
        this.sitiosPorCategoria[categoria] = [];
        }
        this.sitiosPorCategoria[categoria].push(sitio);
        
        //añadimos la categoria a la lista de categorias
        if (!this.categorias.includes(categoria)) {
          this.categorias.push(categoria);
        }
      });
    });
    this.crearMarcadorPorSitio();
  });
  }

  crearMarcadorPorSitio(){
    Object.values(this.sitiosPorCategoria).forEach((sitios: any)=>{
      sitios.forEach((sitio: any) => {
        new mapbox.Marker(
          { 
            color: 'blue',

          })
          .setLngLat(sitio.coordinates) //dónde aparece
          .setPopup(
            new mapbox.Popup()
            .setHTML(`
              <h6>${sitio.name}</h6>
              <span>${sitio.direction}</span>
            `)
          ) //colocamos el popUp
          .addTo(this.map) //lo añadimos al mapa
      });
    })
  }


  filtrarSitios() {
    this.markers.forEach(marker => marker.remove()); // 📌 Eliminamos los marcadores anteriores
    this.markers = []; // Reiniciamos el array de marcadores

    Object.entries(this.sitiosPorCategoria).forEach(([categoria, sitios]) => {
      const sitiosArray = sitios as any[];
      if (this.categoriasSeleccionadas.length === 0 || this.categoriasSeleccionadas.includes(categoria)) {
        sitiosArray.forEach((sitio) => {
          const marker = new mapbox.Marker({ color: 'blue' })
            .setLngLat([sitio.coordinates.lng, sitio.coordinates.lat])
            .setPopup(
              new mapbox.Popup().setHTML(`
                <h6>${sitio.name}</h6>
                <span>${sitio.direction || 'Sin dirección'}</span>
              `)
            )
            .addTo(this.map);

          this.markers.push(marker); // 📌 Guardamos el marcador para poder eliminarlo después
        });
      }
    });
  }

  toggleCategoria(categoria: string) {
    if (this.categoriasSeleccionadas.includes(categoria)) {
      this.categoriasSeleccionadas = this.categoriasSeleccionadas.filter(cat => cat !== categoria);
    } else {
      this.categoriasSeleccionadas.push(categoria);
    }
    this.filtrarSitios(); // 📌 Aplicamos el filtro cada vez que el usuario cambia una opción
  }  
}
