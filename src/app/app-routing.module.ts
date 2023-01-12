import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormComponent } from './pages/form/form.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "registrarse",
    component: SignUpComponent
  },
  { 
    path: 'formulario',
    component: FormComponent
  },
  { 
    path: 'curriculum-vitae',
    component: CurriculumComponent
  },
  {
    path: 'error-404',
    component: Error404Component
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error-404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
