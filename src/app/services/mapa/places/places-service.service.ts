import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../../../interfaces/places';

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
    private http: HttpClient
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

    this.isLoadingPlaces = true;

   this.http.get<PlacesResponse>(` https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?country=es&proximity=${this.userLocation?.[0]}%2C${this.userLocation?.[1]}&language=es&access_token=pk.eyJ1IjoiZG9udXRjb25jaG9jbyIsImEiOiJjbTdjM21qbm8wbDY2MmpzZXQ5bW11YTNtIn0.rQ9yW0c4WRaPaXCGs9gRdA`).subscribe( respuesta => {
      console.log(respuesta.features);
      this.isLoadingPlaces = false;
      this.places=respuesta.features;

      this.places.forEach(sitio => {
        console.log("sitio:", Object.keys(sitio));
      });
      const features = respuesta.features;
      const sitio = features[0]; // Primer elemento
console.log("name: ",sitio.properties.name); 
console.log(JSON.stringify(sitio, null, 2));
console.log(Object.keys(sitio)); 


    });
  }
}
