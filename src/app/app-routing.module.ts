import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'usersearch',
    loadChildren: './people-search/people/people-routing.module#PeopleSearchRoutingModule'
  },
  {
    path: 'login',
    loadChildren: './people-search/login-module/login-routing.module#LoginRoutingModule'
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
