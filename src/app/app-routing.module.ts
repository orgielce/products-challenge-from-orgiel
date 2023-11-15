import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PageNotFoundComponent} from "./components";
import {AuthGuard, ROUTES_PATH} from "./shared";

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], loadChildren: () => import('./modules').then(m => m.LayoutModule)
  },
  {
    path: ROUTES_PATH.Login, loadChildren: () => import('./modules').then(m => m.AuthModule)
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
