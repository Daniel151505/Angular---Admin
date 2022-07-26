import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
          { titulo: 'Main', url:'/' },
          { titulo: 'Progressbar', url: 'progress'},
          { titulo: 'Promesas', url: 'promesas'},
          { titulo: 'Gráficas', url: 'grafical'},
          { titulo: 'Rxjs', url: 'rxjs'}
      ]
    }
  ];

  constructor() { }
}
