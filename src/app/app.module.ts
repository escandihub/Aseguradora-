import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Rutas 
import { app_routing } from './app.routes';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FirebaseConfig } from '../environments/firebase.config'; 
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { AboutComponent } from './components/about/about.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { AutomovilComponent } from './components/automovil/automovil.component';
import { CasaComponent } from './components/casa/casa.component';
import { VidaComponent } from './components/vida/vida.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CoursesListComponent,
    AboutComponent,
    AutomovilComponent,
    CasaComponent,
    VidaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(FirebaseConfig.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),    ///para usar JQuery on bootstrap 
    HttpModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
