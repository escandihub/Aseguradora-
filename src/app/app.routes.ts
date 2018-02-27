import  { RouterModule, Routes } from '@angular/router';

import {AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component'

import { AutomovilComponent } from './components/automovil/automovil.component';
import { CasaComponent } from './components/casa/casa.component';
import { VidaComponent } from './components/vida/vida.component';
import { HomeComponent } from './components/home/home.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'Automovil', component: AutomovilComponent },
    { path: 'Casa', component: CasaComponent},
    { path: 'Vida', component: VidaComponent},
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

export const app_routing = RouterModule.forRoot(app_routes);