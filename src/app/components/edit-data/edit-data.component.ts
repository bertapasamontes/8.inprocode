import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-data',
  standalone: true,
  imports: [],
  templateUrl: './edit-data.component.html',
  styleUrl: './edit-data.component.scss'
})
export class EditDataComponent {

  constructor(
    public _matDialogRef: MatDialogRef<EditDataComponent>
  ){}
}
