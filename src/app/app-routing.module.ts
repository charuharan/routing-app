import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [
  {path:'',redirectTo:'/department',pathMatch:"full"},
  {path:'department',component:DepartmentListComponent},
  {path:'employee',component:EmployeeListComponent},
  {path:'**',component:WildCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[DepartmentListComponent,EmployeeListComponent,WildCardComponent]