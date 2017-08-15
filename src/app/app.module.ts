import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule, MdToolbarModule, MdProgressBarModule, MdCardModule, MdListModule, MdDialogModule, MdTooltipModule, MdSidenavModule, MdTabsModule } from '@angular/material';
import { routing } from './app.routing';
import 'hammerjs';

import { CompaniesService } from './companies.service';
import { TeamService } from './team.service';
import { OperatorsService } from './operators.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { PlaygroundComponent } from './playground/playground.component';
import { AboutComponent } from './about/about.component';
import { ContributeDialogComponent } from 
'./contribute-dialog/contribute-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    PlaygroundComponent,
    AboutComponent,
    ContributeDialogComponent
  ],
  entryComponents: [
    ContributeDialogComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdProgressBarModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MdTooltipModule,
    MdSidenavModule,
    MdTabsModule
  ],
  providers: [CompaniesService, TeamService, OperatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
