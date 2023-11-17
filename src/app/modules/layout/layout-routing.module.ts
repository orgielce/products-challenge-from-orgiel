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
          path: '', redirectTo: ROUTES_PATH.Index, pathMatch: 'full',
        }, {
          path: ROUTES_PATH.Index, component: LayoutComponent,
        }
      ]
    },
  ])],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
