import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstLayerComponent } from './components/first-layer/first-layer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'three-layer-detection',
        component: FirstLayerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetectionLifestyleRoutingModule { }
