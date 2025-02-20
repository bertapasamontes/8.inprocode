import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../../../interfaces/places';
import { MapService } from '../map/map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  userLocation?: [number, number];
  isLoadingPlaces: boolean=false;
  places: Feature[] = []; //feature en mapbox = los sitios.

  get isUserLocationReady(): boolean{
    return !!this.userLocation;
  }

  constructor(
    private http: HttpClient,
    private _mapService: MapService
  ) {
    this.loadUserLocation(); 

  }


  private async loadUserLocation() {
    this.userLocation = await this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number,number]>{
    return new Promise((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition( args =>{ 
        this.userLocation = [args.coords.longitude, args.coords.latitude];
        resolve(this.userLocation);
      },
      (error)=>{
        alert('No se ha podido obtener la geolocalización');
        console.log(error);
        reject();
      }
    )
    })
  }

  getPlacesByQuery( query:string){

    if(query.length == 0){
      this.isLoadingPlaces = false;
      this.places=[];
      return
    }

    this.isLoadingPlaces = true;

   this.http.get<PlacesResponse>(` https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?country=es&proximity=${this.userLocation?.[0]}%2C${this.userLocation?.[1]}&language=es&access_token=pk.eyJ1IjoiZG9udXRjb25jaG9jbyIsImEiOiJjbTdjM21qbm8wbDY2MmpzZXQ5bW11YTNtIn0.rQ9yW0c4WRaPaXCGs9gRdA`).subscribe( respuesta => {
      console.log(respuesta.features);
      this.isLoadingPlaces = false;
      this.places=respuesta.features;
    
      //añadiendo marcadores cada vez que se hace una petición
      this._mapService.createMarkersFromPlaces(this.places, this.userLocation!);


    });
  }
}
