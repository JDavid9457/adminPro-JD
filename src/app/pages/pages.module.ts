import { NgModule } from '@angular/core';
import {PAGES_ROUTES} from './pages.routes'; 
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';
import { FormsModule } from '@angular/forms';
import { AumentaComponent } from '../components/aumenta/aumenta.component';

//Graficas 
import { ChartsModule } from 'ng2-charts';
import { GraphicDonatesComponent } from '../components/graphicDonates/graphicDonates.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphicComponent,
        AumentaComponent,
        GraphicDonatesComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphicComponent,
        AumentaComponent,
        GraphicDonatesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]

})

export class PagesModule { }
