import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { Error404Component } from './pages/error404/error404.component';
import { Z_FULL_FLUSH } from 'zlib';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
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
