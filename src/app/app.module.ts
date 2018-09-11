import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { SinaisVitaisPage } from '../pages/sinais-vitais/sinais-vitais';
import { ListPage } from '../pages/list/list';
import { InicioPage } from "../pages/inicio/inicio";
import { SliderPage } from "../pages/slider/slider";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AjudaPage } from "../pages/ajuda/ajuda";

@NgModule({
  declarations: [
    MyApp,    
    SinaisVitaisPage,
    ListPage,
    InicioPage,
    SliderPage,
    AjudaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    SinaisVitaisPage,
    ListPage,
    InicioPage,
    SliderPage,
    AjudaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
