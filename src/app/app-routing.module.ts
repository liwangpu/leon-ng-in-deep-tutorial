import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'detection-lifestyle',
        loadChildren: () => import('./modules/detection-lifestyle/detection-lifestyle.module').then(m => m.DetectionLifestyleModule)
    },
    {
        path: 'tree-shape-detection',
        loadChildren: () => import('./modules/tree-shape-detection/tree-shape-detection.module').then(m => m.TreeShapeDetectionModule)
    },
    {
        path: 'view-detach',
        loadChildren: () => import('./modules/view-detach/view-detach.module').then(m => m.ViewDetachModule)
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
