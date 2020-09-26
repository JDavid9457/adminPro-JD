import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import {HeaderComponent} from './header/header.component';
import {SideberComponent}from './sideber/sideber.component';
import{BreadcrumbsComponent}from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
    declarations:[
        HeaderComponent,
        SideberComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,

    
    ],
    exports:[
        HeaderComponent,
        SideberComponent,
        BreadcrumbsComponent,
        NopagefoundComponent,

    
    ]
})
export class SharedModule{}