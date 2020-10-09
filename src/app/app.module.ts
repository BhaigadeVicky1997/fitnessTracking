import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AngularFireModule} from 'angularfire2';

import {AngularFirestoreModule} from 'angularfire2/firestore';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

import {MaterialModule} from '../app/material.module'; 
import { MatIconModule } from '@angular/material/icon';

import {ExerciseService} from '../app/training/excercise.service';
import {StoreModule} from '@ngrx/store';
import {environment} from '../environments/environment';
import { AuthService } from './auth/auth.service';
import {UIService} from '../app/shared/ui.service'
import {AuthModule} from '../app/auth/auth.module';
import {TrainingModule} from '../app/training/training.module';
import {reducers} from '../app/app.reducer';
@NgModule({
  declarations: [
    AppComponent,
 WelcomeComponent, HeaderComponent, SidenavListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AuthModule,
    TrainingModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [AuthService,ExerciseService,UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
