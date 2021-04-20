import { Component, OnInit } from '@angular/core';
import {HouseInfoService} from '../../services/house-info.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.sass']
})
export class AllServicesComponent implements OnInit {
  toppings = new FormControl();
  houses;
  add = ['З видом на гори', 'Багатокімнатна', 'Тухля', 'Карпати', 'Славське', 'Двокімнатна', 'Люкс'];
  value: any;
  prise: any;
  params: any;
  constructor(private House: HouseInfoService) { }

  ngOnInit(): void {
    this.House.getHouses().subscribe(house => this.houses = house );
  }

  find() {
    this.params = this.toppings.value;
    this.prise = this.value;
  }
}
