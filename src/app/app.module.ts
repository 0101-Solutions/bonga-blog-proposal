import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './_app/app.component';
// We moved the first app into a component of is own.

// This is the app.js {NODEJS} of your angular file. It is where the application is rendered.
@NgModule({
  // Here is where we put all components that our application will use.
  // After using the ng g c <component-name> our components will be enlisted here automatically
  declarations: [
    AppComponent
  ],
  // This is where our application will bring in the imports necessary for our app to run.
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // These are 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
