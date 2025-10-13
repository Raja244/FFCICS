import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Size } from '../../item.modal';

@Component({
    selector: 'app-item-size-table-data',
    imports: [Button, CurrencyPipe, TableModule],
    templateUrl: './item-size-table-data.component.html',
    styleUrl: './item-size-table-data.component.scss'
})
export class ItemSizeTableDataComponent {
    @Input() sizes: Size[] = [];

    editProduct(size: Size) {}

    deleteProduct(size: Size) {}
}
