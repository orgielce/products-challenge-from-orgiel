import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../shared";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private navigation: NavigationService) { }

  ngOnInit() {
  }

  onGoBack(): void {
    this.navigation.back()
  }

}
