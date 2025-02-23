import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-edit-event',
  imports: [MatIcon, ReactiveFormsModule],
  templateUrl: './add-edit-event.component.html',
  styleUrl: './add-edit-event.component.scss'
})
export class AddEditEventComponent {
editEvent() {
throw new Error('Method not implemented.');
}
  formEditEvent: FormGroup;
  operacion: string = 'Añadir nuevo'


  constructor(
    //matDialog
    public _matDialogRef: MatDialogRef<AddEditEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, //recibir data

    //formulario
    private formBuilder: FormBuilder,
  ){
    //formulario
    this.formEditEvent = formBuilder.group({
      name: ['', Validators.required],
      surname: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]

    })
  }
  volver(){
    this._matDialogRef.close();
  }
}
