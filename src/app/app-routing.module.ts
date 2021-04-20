import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {RentInfoComponent} from "./components/rent-info/rent-info.component";
import {RentMapComponent} from "./components/rent-map/rent-map.component";
import {AllServicesComponent} from "./components/all-services/all-services.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {AncillaryServicesComponent} from "./components/ancillary-services/ancillary-services.component";
import {OrderComponent} from "./components/order/order.component";
import {SingleServiceComponent} from "./components/single-service/single-service.component";


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'info', component: RentInfoComponent},
  {path: 'map', component: RentMapComponent},
  {path: 'addServices', component: AncillaryServicesComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'rent', component: AllServicesComponent},
  {path: 'rent/:id', component: SingleServiceComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
