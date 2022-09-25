import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Admin - errors summary',
    path: 'admin-errors-summary',
    loadComponent: () => import('./features/admin/errors-summary/errors-summary.component').then(m => m.ErrorsSummaryComponent)
  }
];