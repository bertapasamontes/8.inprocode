import { Component } from '@angular/core';
import { PlacesService } from '../../../../services/mapa/places/places-service.service';
// import { Feature } from '../../../../interfaces/places';
import { MapService } from '../../../../services/mapa/map/map.service';
import { NgClass } from '@angular/common';
import { Feature } from '../../../../interfaces/placesRetrieve';

@Component({
  selector: 'app-search-results',
  imports: [NgClass],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {

  selectedId: string = "";

  constructor(
    private _placesService: PlacesService,
    private _mapService: MapService
  ){
   
  } 
  // public places:Feature[] = this._placesService.places;
  
  get isLoadingPlaces(): boolean{
    return this._placesService.isLoadingPlaces;
  }

  get places(): Feature[]{
    return this._placesService.places;
  }

  flyTo(place: Feature){
    this.selectedId=place.properties.mapbox_id;


    const [long, lat] = place.geometry.coordinates;
    this._mapService.flyTo([long, lat]);
  }
}
