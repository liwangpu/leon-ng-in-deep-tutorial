import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoggerComponent } from './components/logger/logger.component';
import { AComponent } from './components/a/a.component';
import { A1Component } from './components/a1/a1.component';
import { A2Component } from './components/a2/a2.component';
import { BComponent } from './components/b/b.component';
import { B1Component } from './components/b1/b1.component';
import { B2Component } from './components/b2/b2.component';
import { TopComponent } from './components/top/top.component';
import { TreeShapeDetectionRoutingModule } from './tree-shape-detection-routing.module';
import { OpsatService } from './services/opsat.service';


@NgModule({
    declarations: [
        HomeComponent, LoggerComponent, AComponent, A1Component, A2Component, BComponent, B1Component, B2Component, TopComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TreeShapeDetectionRoutingModule
    ],
    providers: [
        OpsatService
    ]
})
export class TreeShapeDetectionModule { }
