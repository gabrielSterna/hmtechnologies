import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path: '', component: Main},
    {path: 'home', component: Home}
];
