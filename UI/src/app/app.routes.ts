import { Routes } from '@angular/router';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ViewDataComponent } from './view-data/view-data.component';



export const routes: Routes = [
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'view', component: ViewDataComponent },
  { path: '', redirectTo: 'maintenance', pathMatch: 'full' },
  { path: '**', component: PageNotfoundComponent },
];