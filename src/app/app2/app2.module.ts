import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App2RoutingModule } from './app2-routing.module';
import { App2Component } from './app2/app2.component';


@NgModule({
  declarations: [App2Component],
  imports: [
    CommonModule,
    App2RoutingModule
  ]
})
export class App2Module { }
