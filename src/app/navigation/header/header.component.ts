import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { auth } from 'firebase';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 @Output()  headerToggle = new EventEmitter<void>();
 isAuth = false;
 authSubscription: Subscription;

  constructor(private AuthService:AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.AuthService.authChange.subscribe(authStatus => {
      console.log(authStatus);
      this.isAuth = authStatus;
    });
  }

  //Function's
  onToggleSideNav(){
    this.headerToggle.emit();
  }

  logOut(){
    this.AuthService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
