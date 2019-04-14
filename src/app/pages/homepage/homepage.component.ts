import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _router: Router, private _spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  home() {
    this._router.navigate(['home']);
  }

  about() {
    this._spinner.show();
    this._router.navigate(['about']);
  }

  project() {
    this._spinner.show();
    this._router.navigate(['project']);
  }

}
