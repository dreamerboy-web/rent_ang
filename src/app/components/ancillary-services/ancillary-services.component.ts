import { Component, OnInit } from '@angular/core';
import {HouseInfoService} from '../../services/house-info.service';
import {FormControl} from '@angular/forms';
import {OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-ancillary-services',
  templateUrl: './ancillary-services.component.html',
  styleUrls: ['./ancillary-services.component.sass']
})
export class AncillaryServicesComponent implements OnInit {
  ds = false;
  add;
  toppings = new FormControl();

  order = {
    name: '',
    tell: '',
    additions: ''
  }


  constructor(private House: HouseInfoService, private Order: OrdersService) { }

  ngOnInit(): void {
    this.House.getAdd().subscribe(add => this.add = add);
  }

  success() {
    this.ds = true;
    this.Order.postSmallOrder(this.order).subscribe()
    console.log(this.order);
  }
}
