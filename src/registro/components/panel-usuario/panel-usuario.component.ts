import { Component, OnInit } from '@angular/core';
import {PreciosComponent} from '../precios/precios.component';
@Component({
  selector: 'app-panel-usuario',
  templateUrl: './panel-usuario.component.html',
  styleUrls: ['./panel-usuario.component.css'],

})

export class PanelUsuarioComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {

    let listElement = document.querySelectorAll('.list__button--click');
    let height ;
    listElement.forEach(listElement => {
    
      listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');
    
         height =0 ;
         let menu = <HTMLScriptElement>listElement.nextElementSibling;
        if (menu.clientHeight == 0){
    
            height = menu.scrollHeight;
        }
        menu.style.height=`${height}px`
      })
      
    });
  }
}
