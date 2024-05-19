import { Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';



export const routes: Routes = [
  { path: 'maintenance', component: MaintenanceComponent },
  { path: '', redirectTo: 'maintenance', pathMatch: 'full' },
  { path: '**', component: PageNotfoundComponent },
];