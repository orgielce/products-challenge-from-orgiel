import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {LayoutComponent} from "./layout.component";
import {ROUTES_PATH} from "../../shared";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '', redirectTo: ROUTES_PATH.Products, pathMatch: 'full',
        }
      ]
    },
  ])],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
