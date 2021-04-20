import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from "../../info/global";

@Component({
  selector: 'app-rent-info',
  templateUrl: './rent-info.component.html',
  styleUrls: ['./rent-info.component.sass']
})
export class RentInfoComponent implements OnInit {
  siteName = GlobalConstants.siteName;

  constructor() { }

  ngOnInit(): void {
  }

}
