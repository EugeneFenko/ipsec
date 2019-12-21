import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StartpageComponent } from './components/startpage/startpage.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ConfiguratorComponent } from './components/configurator/configurator.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { MaterialModule } from './material-module';
import { ParticlesModule } from 'angular-particle';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    StartpageComponent,
    CalculatorComponent,
    ConfiguratorComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ParticlesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
