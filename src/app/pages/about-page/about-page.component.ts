import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  home() {
    this._router.navigate(['home']);
  }

  about() {
    this._router.navigate(['about']);
  }

  project() {
    this._router.navigate(['project']);
  }

}
