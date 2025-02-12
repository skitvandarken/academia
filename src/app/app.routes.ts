import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { RegistoComponent } from './paginas/registo/registo.component';

export const routes: Routes = [
    {path: '', component: InicioComponent },
    {path: 'acerca', component: AcercaComponent},
    {path: 'registo', component: RegistoComponent}
];
