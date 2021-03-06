import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './_app/app.component';
import { AiComponent } from './ai/ai.component';
import { NetworkingComponent } from './networking/networking.component';
import { CybersecurityComponent } from './cybersecurity/cybersecurity.component';
import { SoftwareengineeringComponent } from './softwareengineering/softwareengineering.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AwesomifyPipe } from './awesomify.pipe';
import { SortalphabetsPipe } from './sortalphabets.pipe';
import { MagnifyDirective } from './magnify.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { SubjectComponent } from './subject/subject.component';
import { HomeComponent } from './home/home.component';
// We moved the first app into a component of is own.

// This is the app.js {NODEJS} of your angular file. It is where the application is rendered.
@NgModule({
  // Here is where we put all components that our application will use.
  // After using the ng g c <component-name> our components will be enlisted here automatically
  declarations: [
    AppComponent,
    AiComponent,
    NetworkingComponent,
    CybersecurityComponent,
    SoftwareengineeringComponent,
    FormComponent,
    AwesomifyPipe,
    SortalphabetsPipe,
    MagnifyDirective,
    NavigationComponent,
    SubjectComponent,
    HomeComponent
  ],
  // This is where our application will bring in the imports necessary for our app to run.
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  // These are 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
