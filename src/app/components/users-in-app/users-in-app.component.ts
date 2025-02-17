import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { EditDataComponent } from '../edit-data/edit-data.component.js';
import { UserService } from '../../services/user/user.service.js';

@Component({
    selector: 'app-users-in-app',
    imports: [MatIconModule, RouterLink, MatButtonModule],
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

  constructor(
    private _matDialog: MatDialog,
    private _userService: UserService
  ){}

  abrirEdit():void{
    this._matDialog.open(EditDataComponent, {
      width: '900px',
      data: {
        id: this.usuariosEnMichi[0].id,
        name: this.usuariosEnMichi[0].name
      }
    });
  }

  ngOnInit(){
    this.getListUsers();
  }


  getListUsers(){
    this._userService.getListUsers().subscribe((data)=>{
      console.log(data)
    })
  }
}
