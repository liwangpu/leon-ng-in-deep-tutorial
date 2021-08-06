import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDetachRoutingModule } from './view-detach-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ViewDetachRoutingModule
  ]
})
export class ViewDetachModule { }
