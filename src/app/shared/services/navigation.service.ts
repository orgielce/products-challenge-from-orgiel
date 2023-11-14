import { Injectable } from '@angular/core';
import { Location } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router'
import {ROUTES_PATH} from "../routes";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];
  private currentUrl!: string;

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  getCurrentPath = (): string => this.location.path();

  back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl(ROUTES_PATH.Products).then();
    }
  }
}

