import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  Event as NavigationEvent,
} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // routeFound is true when the route in used is different of '**'
  public routeFound: boolean = false;
  private _event$;
  private _routes;

  constructor(private _router: Router) {
    // map and filter the route by '**'
    this._routes = this._router.config
      .map((route) => route.path)
      .filter((route) => route != '**');
    console.log(this._routes); // console to see all defined routes
    this._event$ = this._router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        // when the navigation ends
        console.log(event.url); // console to see the current url
        let url = event.url.split('/')[1];
        console.log(url); // url without the / at the beggining
        this._routes.filter((route) => {
          if (route.split('/')[0] == url) {
            this.routeFound = true;
          }
        });
      }
    });
  }

  ngOnInit() {}
}
