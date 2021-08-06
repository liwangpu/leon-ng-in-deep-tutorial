import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectionLifestyleRoutingModule } from './detection-lifestyle-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FirstLayerComponent } from './components/first-layer/first-layer.component';
import { SecondLayerComponent } from './components/second-layer/second-layer.component';
import { ThirdLayerComponent } from './components/third-layer/third-layer.component';

@NgModule({
    declarations: [
        HomeComponent,
        FirstLayerComponent,
        SecondLayerComponent,
        ThirdLayerComponent
    ],
    imports: [
        CommonModule,
        DetectionLifestyleRoutingModule
    ]
})
export class DetectionLifestyleModule { }
