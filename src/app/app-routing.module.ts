import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { RegistrtionStudentComponent } from './components/registrtion-student/registrtion-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';

const routes: Routes = [
{ path:'',component:ProductsComponent},
{ path:'products',component:ProductsComponent},
{ path:'edit',component:EditStudentComponent},
{ path:'list',component:ListStudentComponent},
{ path:'login',component:LoginStudentComponent},
{ path:'register',component:RegistrtionStudentComponent},
{ path:'add',component:AddStudentComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
