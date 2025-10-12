import {Component, ElementRef, ViewChild} from '@angular/core';
import {Empty} from "../../../pages/empty/empty";
import {Customer, CustomerService, Representative} from "../../../pages/service/customer.service";
import {Product, ProductService} from "../../../pages/service/product.service";
import {Table, TableModule} from "primeng/table";
import {Button, ButtonDirective} from "primeng/button";
import {Tag} from "primeng/tag";
import {FileUpload} from "primeng/fileupload";
import {Toolbar} from "primeng/toolbar";

interface expandedRows {
    [key: string]: boolean;
}

@Component({
  selector: 'app-customer-master-data',
    imports: [
        TableModule,
        ButtonDirective,
        Tag,
        Button,
        Toolbar
    ],
  templateUrl: './customer-master-data.component.html',
  styleUrl: './customer-master-data.component.scss',
    providers: [CustomerService,ProductService],
})
export class CustomerMasterDataComponent {
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

    openNew() {

    }
}
