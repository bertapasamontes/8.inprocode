import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  userLocation?: [number, number];

  get isUserLocationReady(): boolean{
    return !!this.userLocation;
  }

  constructor() {this.loadUserLocation(); }
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
}
