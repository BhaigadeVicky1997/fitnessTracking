import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {AuthService} from '../app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'material';
  openSideNav: boolean = false;
constructor(public AuthService:AuthService){}

  ngOnInit() {
    this.AuthService.initAuthListener();
  }
}
