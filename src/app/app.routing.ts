import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlaygroundComponent } from './playground/playground.component';
import { TeamComponent } from './team/team.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'team', component: TeamComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);