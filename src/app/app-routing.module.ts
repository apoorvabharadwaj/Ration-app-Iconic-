import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/user/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'order/:id', loadChildren: './pages/order/order.module#OrderPageModule',
	canActivate: [AuthGuard],
  },
  { path: 'update', loadChildren: './update/update.module#UpdatePageModule' },
  { path: 'name', loadChildren: './update/name/name.module#NamePageModule' },
  { path: 'address', loadChildren: './update/address/address.module#AddressPageModule' },
  { path: 'add', loadChildren: './update/add/add.module#AddPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
