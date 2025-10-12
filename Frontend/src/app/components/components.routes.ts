import { Routes } from '@angular/router';
import {CustomerMasterDataComponent} from "./master-data/customer-master-data/customer-master-data.component";
import {ItemMasterDataComponent} from "./master-data/item-master-data/item-master-data.component";
import {EmployeeMasterDataComponent} from "./master-data/employee-master-data/employee-master-data.component";

export default [
    { path: 'customer', component: CustomerMasterDataComponent },
    { path: 'item', component: ItemMasterDataComponent },
    { path: 'employee', component: EmployeeMasterDataComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
