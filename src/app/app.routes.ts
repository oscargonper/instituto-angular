import { Routes } from '@angular/router';
import { InformaticaComponent } from './components/informatica/informatica.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { GradosuperiorComponent } from './components/gradosuperior/gradosuperior.component';
import { InstitutoComponent } from './components/instituto/instituto.component';

export const routes: Routes = [
    {
        path: "informatica",
        component:InformaticaComponent,
        children:[
            {
                path:"gradosuperior",
                component:GradosuperiorComponent
            },
            {
                path:"instituto",
                component:InstitutoComponent
            }

        ]
    },
    {
        path: "formulario",
        component:FormularioComponent
    },
    {
        path: "presentacion",
        component:PresentacionComponent
    }

];
