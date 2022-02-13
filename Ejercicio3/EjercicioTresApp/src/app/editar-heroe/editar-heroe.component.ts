import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeroeMarvelComponent } from '../heroes-marvel/heroe-marvel/heroe-marvel.component';

@Component({
  selector: 'app-editar-heroe',
  templateUrl: './editar-heroe.component.html',
  styleUrls: ['./editar-heroe.component.css']
})
export class EditarHeroeComponent implements OnInit {
  constructor(public dialogRef:MatDialogRef<HeroeMarvelComponent>, @Inject(MAT_DIALOG_DATA) public heroe: any) { }

  ngOnInit(): void {
    console.log('Heroe', this.heroe.heroe);
  }

  
  closeModal(): void {
    this.dialogRef.close();
  }

}
