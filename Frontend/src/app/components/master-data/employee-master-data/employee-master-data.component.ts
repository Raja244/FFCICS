import { Component } from '@angular/core';
import { Button, ButtonDirective } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Tag } from 'primeng/tag';
import { Toolbar } from 'primeng/toolbar';
import { Customer, CustomerService } from '../../../pages/service/customer.service';
import { ProductService } from '../../../pages/service/product.service';

@Component({
    selector: 'app-employee-master-data',
    imports: [Button, ButtonDirective, TableModule, Tag, Toolbar],
    templateUrl: './employee-master-data.component.html',
    styleUrl: './employee-master-data.component.scss',
    providers: [CustomerService, ProductService]
})
export class EmployeeMasterDataComponent {
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    calculateCustomerTotal(name: string) {
        let total = 0;

        if (this.customers) {
            for (let customer of this.customers) {
                if (customer.representative?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    // @ts-ignore
    getSeverity(status: string) {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warn';

            case 'renewal':
                return null;
        }
    }

    openNew() {}
}
