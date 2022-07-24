import { Component } from '@angular/core';


@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styles: [
  ]
})
export class GraficalComponent {

  public labels1: string[] = [ 'Pan', 'Gaseosa', 'Queso' ];
  public data1 = [
    [ 10, 15, 40 ]
  ];
}
