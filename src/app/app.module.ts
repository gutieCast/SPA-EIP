import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { Error404Component } from './pages/error404/error404.component';
import { HoverMenuItemDirective } from './directives/hover-menu-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    CurriculumComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    HoverMenuItemDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
