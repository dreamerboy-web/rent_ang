import { Component, OnInit } from '@angular/core';
import {GlobalConstants} from "../../info/global";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  siteName = GlobalConstants.siteName;

  constructor() { }

  ngOnInit(): void {
  }

}
