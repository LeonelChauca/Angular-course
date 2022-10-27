import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes:string[]=['spiderman','iron man','thor','capitan america'];
  heroeBorrado:string='';
  borrarHeroe():void{
    this.heroeBorrado=this.heroes.shift() || '';
  }
  verHeroes():boolean{
    if(this.heroeBorrado==''){
      return false;
    }
    return true;
  }
}
