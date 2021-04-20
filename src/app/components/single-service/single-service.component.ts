import {Component, OnInit} from '@angular/core';
import {HouseInfoService} from '../../services/house-info.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {OrderComponent} from '../order/order.component';
import {OrdersService} from '../../services/orders.service';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.sass']
})
export class SingleServiceComponent implements OnInit {
  house;
  add;
  toppings = new FormControl();

  ds = false;

  order = {
    name: '',
    tell: '',
    additions: '',
    coment: '',
    houseId: 0,
    houseName: '',
    prise: 0
  }

  constructor(private activateRout: ActivatedRoute, private House: HouseInfoService, private Order: OrdersService) {
  }

  ngOnInit(): void {

    this.activateRout.params.subscribe(params => {
      this.House.getHousesById(params.id).subscribe(house => {
        this.house = house;
        this.House.getAdd().subscribe(add => this.add = add)
      });
    });
  }

  success() {
    this.ds = true;
    this.order.houseId = this.house.id;
    this.order.houseName = this.house.name;
    this.order.prise = this.house.prise;
    this.Order.postBigOrder(this.order).subscribe();
    console.log(this.order);
  }
}
