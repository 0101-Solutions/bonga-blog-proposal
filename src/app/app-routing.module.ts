import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiComponent } from './ai/ai.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { HomeComponent } from './home/home.component';
import { NetworkingComponent } from './networking/networking.component';
import { SoftwareengineeringComponent } from './softwareengineering/softwareengineering.component';

const routes: Routes = [
  // We add our routes.
  { path: 'ai', component: AiComponent, pathMatch: 'full' },
  { path: 'cyber-security', component: CybersecurityComponent, pathMatch: 'full' },
  { path: 'networking', component: NetworkingComponent, pathMatch: 'full' },
  { path: 'swe', component: SoftwareengineeringComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },


];

// Below is the Module Decorator discussed in the notes.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
