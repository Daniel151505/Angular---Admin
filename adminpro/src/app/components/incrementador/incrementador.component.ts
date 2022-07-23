import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  {

  @Input('valor') progreso: number = 10;
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter()

  get getPorcentaje() {
    return `${ this.progreso }%`;
  }

  cambiarValor( valor:number ) {
    this.progreso += valor;
    this.valorSalida.emit( this.progreso );
      if (this.progreso > 100) {
        this.valorSalida.emit(100)
        this.progreso = 100;
      } else if (this.progreso < 0) {
        this.valorSalida.emit(0)
        this.progreso = 0;
      }
  }


}
