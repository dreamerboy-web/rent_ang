import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from "../../info/global";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  siteName = GlobalConstants.siteName

  ngOnInit(): void {
  }

}
