import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {environment} from "../environments/environment";
import {AuthenticateService} from "./authenticate.service";
import {SignupPageModule} from "./pages/signup/signup.module";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {LoginPageModule} from "./pages/login/login.module";
import {PasswordresetPageModule} from "./pages/passwordreset/passwordreset.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    SignupPageModule,
    LoginPageModule,
    PasswordresetPageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthenticateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
