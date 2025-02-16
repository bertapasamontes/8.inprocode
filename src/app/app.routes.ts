import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component.js';
import { MapaComponent } from './components/mapa/mapa.component.js';
import { ChartsComponent } from './components/charts/charts.component.js';
import { FullCalendarComponent } from './components/full-calendar/full-calendar.component.js';
import { EditDataComponent } from './components/edit-data/edit-data.component.js';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full'},
    { path: 'edit/:id', component: EditDataComponent},
    { path: 'mapa', component: MapaComponent},
    { path: 'calendar', component: FullCalendarComponent},
    { path: 'charts', component: ChartsComponent},
    { path: '**', redirectTo:"", pathMatch:'full', component: HomeComponent},


];
