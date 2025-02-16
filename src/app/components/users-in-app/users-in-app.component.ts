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

@Component({
  selector: 'app-users-in-app',
  standalone: true,
  imports: [MatIconModule, RouterLink, MatButtonModule ],
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
    private _matDialog: MatDialog
  ){}

  abrirEdit():void{
    this._matDialog.open(EditDataComponent);
  }
}
