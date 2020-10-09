import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UIService } from 'src/app/shared/ui.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromroot from '../../app.reducer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Variable Declaration
  loginForm: FormGroup;
  isLoading$  :Observable<boolean>;
  private loadingSubs: Subscription;

  constructor(private AuthService: AuthService, private UIService: UIService,private Store:Store<fromroot.State>) {
  this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  ngOnInit(): void {
    this.isLoading$ = this.Store.select(fromroot.getIsLoading);
    console.log(this.isLoading$);
    // this.loadingSubs = this.UIService.loadingStateChanged.subscribe(result => {
    //   this.isLoading = result;
    // })
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.AuthService.login({
      email: form.value.email,
      password: form.value.pass
    });
  }

  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe()
    }
  }

}
