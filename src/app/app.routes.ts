import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Home } from './pages/home/home';
import { Achivements } from './pages/home/pages/achivements/achivements';
import { Service3d } from './pages/home/pages/service3d/service3d';
import { DrillSizeChart } from './pages/home/pages/drill-size-chart/drill-size-chart';
import { ContactUs } from './pages/home/pages/contact-us/contact-us';

export const routes: Routes = [
    {path: '', component: Main},
    {path: 'home', component: Home},
    {path: 'realisations', component: Achivements},
    {path: 'services3D', component: Service3d},
    {path: 'equivalences-et-G-codes', component: DrillSizeChart},
    {path: 'contacts', component: ContactUs},

];
