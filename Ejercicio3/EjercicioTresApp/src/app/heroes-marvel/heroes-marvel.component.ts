import { AnimateChildOptions } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarHeroeComponent } from '../editar-heroe/editar-heroe.component';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-heroes-marvel',
  templateUrl: './heroes-marvel.component.html',
  styleUrls: ['./heroes-marvel.component.css']
})
export class HeroesMarvelComponent implements OnInit {
  data: any = [];
  dataTem: any = [];
  inputFilter: any;
  valorInput: string = '';

  constructor(
    public serviceMarvel: MarvelService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.returnScrolled();
    this.getAllHeroes();
  }

  async returnScrolled() {
    let offset = 0;
    let contador = 0;
    window.addEventListener('scroll', async () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      let scrolled = window.scrollY;
      if (scrollable - scrolled < 800) {
          contador++;
          scrolled = 0;
          if (contador == 1) {
            let aumento = 20;
            offset = offset + aumento;
            const nuevaData = await this.serviceMarvel.getHeroesPlus(20, offset).toPromise();
            for (let i =  0; i < nuevaData.length; i++) {
              this.data.push(nuevaData[i]);         
            }
            contador = 0;
          }
      }
    });
  }

  async getAllHeroes() {
    this.data = await this.serviceMarvel.getHeroes().toPromise();
  }
  async getHeroeWihtName(name: string) {
    this.data = await this.serviceMarvel.getHeroesWithName(name).toPromise();
  }

  async changeValueLive(value: any) { 
    this.data = await this.serviceMarvel.getHeroes().toPromise();
    this.data = this.data.filter((x: any) => x.name.includes(value));
  }

  async changeValue(value: any) { 
    this.valorInput = value;
    if (!value) {
      this.getAllHeroes();
    }
  }

  async buscarHeroe(){ 
    this.data = await this.serviceMarvel.getHeroesWithName(this.valorInput).toPromise();
  }
}
