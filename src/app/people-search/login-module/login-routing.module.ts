import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { CommonMaterialModule } from '../common/common.module';
import { LoginComponent } from '../login/login.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
];
@NgModule({
  imports: [
    CommonMaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    CommonMaterialModule
  ],
  declarations: [
    LoginComponent,
  ]
})
export class LoginRoutingModule { }
