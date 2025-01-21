import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App1RoutingModule } from './app1-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [DashboardComponent, ListComponent],
  imports: [
    CommonModule,
    App1RoutingModule,
    ScrollingModule
  ]
})
export class App1Module { }
