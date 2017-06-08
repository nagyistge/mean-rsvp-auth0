import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() navToggled = new EventEmitter();
  navOpen = false;
  authSub: Subscription;
  loggedIn: boolean;

  constructor(
    private router: Router,
    public auth: AuthService) { }

  ngOnInit() {
    // If nav is open after routing, close it
    this.router.events
      .filter(event => event instanceof NavigationStart && this.navOpen)
      .subscribe(event => this.toggleNav());
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }

}
