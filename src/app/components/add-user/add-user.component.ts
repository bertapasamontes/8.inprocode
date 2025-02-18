import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-add-user',
  imports: [MatIcon],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  constructor(
      public _matDialogRef: MatDialogRef<AddUserComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any //recibir data
    ){
      this.data.id
      this.data.name; //recibiendo data en el HTML
    }
}
