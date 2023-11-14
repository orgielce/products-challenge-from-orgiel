import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { LayoutComponent } from './layout.component';
import {LayoutRoutingModule} from "./layout-routing.module";

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutRoutingModule,
    ButtonModule
  ]
})
export class LayoutModule { }
