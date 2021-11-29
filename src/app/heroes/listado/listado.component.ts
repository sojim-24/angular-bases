import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman","Ironman","Hulk","Thor","Capitan America"];
  heroeborrado: string = "";

  borrarHeroe(index: number):void{
    console.log("Borrando...");
    this.heroeborrado = this.heroes[index];
    this.heroes.splice(index,1);
    if (this.heroes.length == 0){
      this.heroeborrado = '';
    }
  }

}
