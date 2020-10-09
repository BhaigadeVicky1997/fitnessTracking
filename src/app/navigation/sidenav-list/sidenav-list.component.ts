//Angular Imports
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  //Variable Declarations
  @Output() sideNav = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;
  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.AuthService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  //functions Declarations
  onClose() {
    this.sideNav.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  logOut() {
    this.AuthService.logout();

    this.sideNav.emit();
  }

}
