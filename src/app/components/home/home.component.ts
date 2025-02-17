import { Component } from '@angular/core';
import { UsersInAppComponent } from '../users-in-app/users-in-app.component';

@Component({
    selector: 'app-home',
    imports: [UsersInAppComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
