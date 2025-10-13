import { Routes } from '@angular/router';
import { SanghaMasterDataComponent } from './master-data/sangha-master-data/sangha-master-data.component';
import { ItemMasterDataComponent } from './master-data/item-master-data/item-master-data.component';
import { EmployeeMasterDataComponent } from './master-data/employee-master-data/employee-master-data.component';

export default [
    { path: 'sangha', component: SanghaMasterDataComponent },
    { path: 'item', component: ItemMasterDataComponent },
    { path: 'employee', component: EmployeeMasterDataComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
