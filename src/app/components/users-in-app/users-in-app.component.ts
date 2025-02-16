import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-users-in-app',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './users-in-app.component.html',
  styleUrl: './users-in-app.component.scss'
})
export class UsersInAppComponent {
  usuariosEnMichi=[
    {
      id:1,
      name: "Prueba",
      surname: "1",
      username: "prueba1",
      email: "prueba1@gmail.com"
    }
  ]
}
