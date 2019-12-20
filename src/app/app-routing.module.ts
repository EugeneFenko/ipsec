import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartpageComponent } from './components/startpage/startpage.component';
import { ConfiguratorComponent } from './components/configurator/configurator.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StartpageComponent },
  { path: 'calculator', pathMatch: 'full', component: CalculatorComponent },
  { path: 'configurator', pathMatch: 'full', component: ConfiguratorComponent },
  { path: 'about', pathMatch: 'full', component: AboutComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
