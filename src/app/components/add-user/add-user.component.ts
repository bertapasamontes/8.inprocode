import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { User } from '../../interfaces/users';
import { UserService } from '../../services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { ProgressBarComponent } from "../shared/progress-bar/progress-bar.component";

@Component({
  selector: 'app-add-user',
  imports: [MatIcon, ReactiveFormsModule, ProgressBarComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  formAddUser: FormGroup;
  loading: Boolean = false;

  constructor(
      public _matDialogRef: MatDialogRef<AddUserComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any, //recibir data

      //formulario
      private formBuilder: FormBuilder,

      //servicio user
      private _userService: UserService,

      //toast
      private toastr: ToastrService
      
    ){
      this.data.id
      this.data.name; //recibiendo data en el HTML

      //formulario
      this.formAddUser = formBuilder.group({
        name: ['', Validators.required],
        surname: [''],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]]

      })
    }

    addUser(){
      const usuarioNuevo: User = {
        name: this.formAddUser.value.name,
        surname: this.formAddUser.value.surname,
        username: this.formAddUser.value.username,
        password: this.formAddUser.value.password,
        email: this.formAddUser.value.email       
      }
      console.log(usuarioNuevo);

      this.loading =true;
      this._userService.saveUser(usuarioNuevo).subscribe(()=>{
        this.loading = false;
        console.log("user añadido a la base de datos exitosamente");
      })
      
      this._matDialogRef.close();

      this.toastr.success(`${usuarioNuevo.name} añadido exitosamente a la base de datos`, 'Usuario nuevo')

    }
}
