import { Component } from '@angular/core';
import { PlacesService } from '../../services/places/places-service.service';
import { MapViewComponent } from "./components/map-view/map-view.component";
import { ProgressBarComponent } from "../shared/progress-bar/progress-bar.component";

@Component({
    selector: 'app-mapa',
    imports: [MapViewComponent, ProgressBarComponent],
    templateUrl: './mapa.component.html',
    styleUrl: './mapa.component.scss'
})
export class MapaComponent {
    constructor(
        private _placesService: PlacesService
    ){}
    
    get isUserLocationReady(){
        return this._placesService.isUserLocationReady;
    }

    getLocation(){
        console.log("servicio places:",this._placesService.getUserLocation());
    }
}
