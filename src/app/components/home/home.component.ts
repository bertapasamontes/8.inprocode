import { Component } from '@angular/core';
import { UsersInAppComponent } from '../users-in-app/users-in-app.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsersInAppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
