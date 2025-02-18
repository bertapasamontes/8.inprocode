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

import { User } from '../../interfaces/users.js';
import { ProgressBarComponent } from "../shared/progress-bar/progress-bar.component";
import { ToastrService } from 'ngx-toastr';
import { AddUserComponent } from '../add-user/add-user.component.js';

@Component({
    selector: 'app-users-in-app',
    imports: [MatIconModule, RouterLink, MatButtonModule, ProgressBarComponent],
    templateUrl: './users-in-app.component.html',
    styleUrl: './users-in-app.component.scss'
})
export class UsersInAppComponent {
  usuariosEnMichi: User[]=[]
  loading: Boolean = false;

  constructor(
    private _matDialog: MatDialog,
    private _userService: UserService,
    private toastr: ToastrService
  ){}

  abrirEdit():void{
    this._matDialog.open(EditDataComponent, {
      width: '900px',
      data: {
        // id: this.usuariosEnMichi[0].id,
        // name: this.usuariosEnMichi[0].name
      }
    });
  }

  abrirNuevoUser():void{
    this._matDialog.open(AddUserComponent, {
      width: '900px',
      data: {
        // id: this.usuariosEnMichi[0].id,
        // name: this.usuariosEnMichi[0].name
      }
    });
  }

  ngOnInit(){
    this.getListUsers();
  }


  getListUsers(){
    this.loading = true;
    this._userService.getListUsers().subscribe((data:User[])=>{
      console.log("users:", data);
      this.usuariosEnMichi = data;
      this.loading = false;
    })
  }

  deleteUser(id:number){
    this.loading = true;
    this._userService.deleteUser(id).subscribe(() =>{
      this.getListUsers(); // para volver a cargar la lista y que no se queden los antiguos
    })
    this.toastr.success('Usuario eliminado exitosamente', 'User eliminado')
  }
}
