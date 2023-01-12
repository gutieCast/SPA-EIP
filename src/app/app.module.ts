import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HoverMenuItemDirective } from './directives/hover-menu-item.directive';
import { InputIsEmptyDirective } from './directives/input-is-empty.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { Error404Component } from './pages/error404/error404.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    CurriculumComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    HoverMenuItemDirective,
    InputIsEmptyDirective,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
