import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-data',
  standalone: true,
  imports: [],
  templateUrl: './edit-data.component.html',
  styleUrl: './edit-data.component.scss'
})
export class EditDataComponent {

  constructor(
    public _matDialogRef: MatDialogRef<EditDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any //recibir data
  ){
    this.data.id
    this.data.name; //recibiendo data en el HTML
  }
}
