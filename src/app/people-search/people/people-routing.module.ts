import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserSearchComponent } from '../user-search/user-search.component';
import { CommonMaterialModule } from '../common/common.module';
const routes: Routes = [
  { path: '', component: UserSearchComponent },
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
    UserSearchComponent,
  ]
})
export class PeopleSearchRoutingModule { }
