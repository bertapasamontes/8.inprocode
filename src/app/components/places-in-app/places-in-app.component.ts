import { Component } from '@angular/core';
import { MapGlobalService } from '../../services/mapa/map-global.service';
import { ToastrService } from 'ngx-toastr';
import { placeGlobal } from '../../interfaces/places/placeGlobal';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-places-in-app',
  imports: [MatIcon],
  templateUrl: './places-in-app.component.html',
  styleUrl: './places-in-app.component.scss'
})
export class PlacesInAppComponent {

   placesEnMichi: placeGlobal[]=[]
    loading: Boolean = false;
  
    constructor(
      private _mapGlobal: MapGlobalService,
      private toastr: ToastrService
    ){
      
    }
  
    ngOnInit(){
      this.getListPlaces();
    }
  
    getListPlaces(){
      this.loading = true;
      this._mapGlobal.getListPlaces().subscribe((data)=>{
        console.log("users:", data);
        this.placesEnMichi = data;
        this.loading = false;
      })
    }
  
    deletePlace(id:number){
      this.loading = true;
      this._mapGlobal.deletePlace(id).subscribe(() =>{
        this.getListPlaces(); // para volver a cargar la lista y que no se queden los antiguos
      })
      this.toastr.success('Sitio eliminado correctamente', 'Local eliminado')
    }
}
