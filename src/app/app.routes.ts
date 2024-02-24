import { Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { catalogoComponent } from './components/catalogo/catalogo.component';
import { pedidoComponent } from './components/pedido/pedido.component';

export const routes: Routes = [
  {path:'', component: HomeComponent,
  children:[
    {
      path:'productos-list',
      title: 'Products List',
      component: HomeComponent,
    },
  ]
},
{path: 'home', component: HomeComponent},
{path:'catalogo', component:catalogoComponent ,
  children:[
    {
      path:'productos-list',
      title: 'Products List',
      component: catalogoComponent,
    },
  ]
},
  {path:'pedido', component: pedidoComponent},
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},

];
