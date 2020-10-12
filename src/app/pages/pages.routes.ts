import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { PagesComponent} from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicComponent } from './graphic/graphic.component';
import { AccoutSettingComponent } from './accout-setting/accout-setting.component';

const pagesRoutes: Routes= [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graphic', component: GraphicComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'accoutSetting', component: AccoutSettingComponent },
            { path: '',redirectTo: '/dashboard',pathMatch: 'full' },
        ]

    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);