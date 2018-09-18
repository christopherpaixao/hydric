import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { SinaisVitaisPage } from '../pages/sinais-vitais/sinais-vitais';
import { ListPage } from '../pages/list/list';
import { InicioPage } from "../pages/inicio/inicio";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AjudaPage } from "../pages/ajuda/ajuda";
import { PacienteProvider } from '../providers/paciente/paciente';



@NgModule({
  declarations: [
    MyApp,    
    SinaisVitaisPage,
    ListPage,
    InicioPage,    
    AjudaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC7LeW-7yBXUea9ofafA8_kenD4Ut1eKII",
      authDomain: "appfirebase-1bd5a.firebaseapp.com",
      databaseURL: "https://appfirebase-1bd5a.firebaseio.com",
      projectId: "appfirebase-1bd5a",
      storageBucket: "appfirebase-1bd5a.appspot.com",
      messagingSenderId: "314925257716"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    SinaisVitaisPage,
    ListPage,
    InicioPage,    
    AjudaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PacienteProvider
  ]
})
export class AppModule {}
