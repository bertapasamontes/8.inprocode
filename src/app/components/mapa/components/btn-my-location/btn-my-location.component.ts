import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-btn-my-location',
  imports: [MatIcon],
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.scss'
})
export class BtnMyLocationComponent {
  goToMyLocation(){
    console.log('ir a mi ubi');
  }
}
