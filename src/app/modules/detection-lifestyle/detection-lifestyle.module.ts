import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetectionLifestyleRoutingModule } from './detection-lifestyle-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        DetectionLifestyleRoutingModule
    ]
})
export class DetectionLifestyleModule { }
