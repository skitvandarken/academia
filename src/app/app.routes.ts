import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';

export const routes: Routes = [
    {path: '', component: InicioComponent },
    {path: 'acerca', component: AcercaComponent}
];
