import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progreso: number = 10;

  get getPorcentaje() {
    return `${ this.progreso }%`;
  }

  cambiarValor( valor:number ) {
    this.progreso += valor;
      if (this.progreso > 100) {
        this.progreso = 100;
      } else if (this.progreso < 0) {
      this.progreso = 0;
      }
  }

}
