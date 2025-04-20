import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { SliderComponent } from '../../layout/slider/slider.component';
import { ServicosComponent } from '../../layout/servicos/servicos.component';
import { EventosComponent } from '../../layout/eventos/eventos.component';
import { TestemunhosComponent } from '../../layout/testemunhos/testemunhos.component';
import { ParceirosComponent } from '../../layout/parceiros/parceiros.component';
import { CalendarioComponent } from '../../layout/calendario/calendario.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { SlidershowComponent } from '../../layout/slidershow/slidershow.component';

@Component({
  selector: 'app-inicio',
  imports: [
   MenuComponent,
   SlidershowComponent,
   SliderComponent,
   ServicosComponent,
   EventosComponent, 
   CalendarioComponent,
   TestemunhosComponent, ParceirosComponent, RodapeComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
