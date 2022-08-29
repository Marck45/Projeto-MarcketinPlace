import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { ProductsComponent } from './components/products/products.component';
import { SellComponent } from './components/sell/sell.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: CadastroComponent},
  { path: 'dashboard', component: DashboardsComponent},
  { path: 'sell', component: SellComponent},
  { path: 'products', component:ProductsComponent },
  { path: 'user', component: UsersComponent},
  { path: 'signUp', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
