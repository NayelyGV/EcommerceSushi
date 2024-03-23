import { Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { PedidoComponent } from './components/pedido/pedido.component';

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
{path:'catalogo', component:CatalogoComponent ,
  children:[
    {
      path:'productos-list',
      title: 'Products List',
      component: CatalogoComponent,
    },
  ]
},
  {path:'pedido', component: PedidoComponent},
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},

];
