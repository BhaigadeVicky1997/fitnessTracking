//Angular Imports
import { NgModule } from '@angular/core';

//Firebase Imports
import { AngularFireAuthModule } from 'angularfire2/auth';

//Local Imports
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({

    declarations: [
        SignupComponent,
        LoginComponent
    ],
    imports: [
        AngularFireAuthModule,
        SharedModule,
        AuthRoutingModule
    ],
    exports: [],

})
export class AuthModule {}