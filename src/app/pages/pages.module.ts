import { NgModule } from '@angular/core';
import {PAGES_ROUTES} from './pages.routes'; 
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphicComponent,
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphicComponent,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]

})

export class PagesModule { }
