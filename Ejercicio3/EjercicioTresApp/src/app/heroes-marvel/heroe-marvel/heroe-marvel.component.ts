import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarHeroeComponent } from 'src/app/editar-heroe/editar-heroe.component';

@Component({
  selector: 'app-heroe-marvel',
  templateUrl: './heroe-marvel.component.html',
  styleUrls: ['./heroe-marvel.component.css']
})
export class HeroeMarvelComponent implements OnInit {
  @Input()heroe: any;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  editarHeroe(item: any) {
    const dialogRef = this.dialog.open(EditarHeroeComponent, {
			width:"1200px",
			height:"700px",
			maxHeight:"90vh",
			maxWidth:"90vw",
			data: {
				heroe: item,
				// totalVacantes: 
			}
		});
  }

}
