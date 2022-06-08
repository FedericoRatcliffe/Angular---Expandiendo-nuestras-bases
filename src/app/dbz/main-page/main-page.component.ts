import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})


export class MainPageComponent {



  nuevo: Personaje ={
    nombre: 'Karim',
    poder: 1
  }


  //INYECTAMOS EL SERVICIO EN ESTE COMPONENTE(MAIN-PAGE)
  constructor(){

  }

}
