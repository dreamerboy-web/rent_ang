import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from "../../info/global";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  siteName = GlobalConstants.siteName;

  constructor() { }

  ngOnInit(): void {
  }

}
