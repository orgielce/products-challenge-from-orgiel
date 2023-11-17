import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ROUTES_PATH} from "../../shared";
import {BoardComponent} from "./board.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: BoardComponent,
      children: [
        {
          path: '', redirectTo: ROUTES_PATH.Products, pathMatch: 'full',
        }, {
          path: ROUTES_PATH.Products, component: BoardComponent,
        }
      ]
    },
  ])],
  exports: [RouterModule]
})
export class BoardRoutingModule {
}
