import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VisualizeComponent } from './visualize/visualize.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'visualize', component: VisualizeComponent},
];
