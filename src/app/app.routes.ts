import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { InfoActionComponent } from './screens/info-action/info-action.component';
import { TaxComponent } from './screens/tax/tax.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'info', component: InfoActionComponent },
  { path: 'tax', component: TaxComponent },
];
