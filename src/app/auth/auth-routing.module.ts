import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';

const routes:Routes = [

    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ]
})

export class AuthRoutingModule{}