import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ItemSizeTableDataComponent } from './item-size-table-data/item-size-table-data.component';
import { Item, Size } from '../item.modal';
import { Ripple } from 'primeng/ripple';
import { AddEditSizeDialogComponent } from '../../../dialogs/add-edit-size-dialog/add-edit-size-dialog.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-item-table-data',
    imports: [TableModule, Button, FormsModule, ItemSizeTableDataComponent, Ripple],
    templateUrl: './item-table-data.component.html',
    styleUrl: './item-table-data.component.scss',
    providers: [DialogService]
})
export class ItemTableDataComponent {
    @Input() items: Item[] = [];
    ref: DynamicDialogRef | undefined;

    constructor(public dialogService: DialogService) {}
    getAvailableSizes(itemName: string): string {
        return this.items
            .filter((element) => element.itemName === itemName)
            .flatMap((element) => element.sizes.map((e) => e.sizeNo))
            .join(', ');
    }

    getPriceRange(itemName: string): string {
        const prices = this.items
            .filter((element) => element.itemName === itemName)
            .flatMap((element) => element.sizes.map((e) => Number(e.price)))
            .filter((price) => !isNaN(price));
        if (prices.length === 0) return '';

        const min = Math.min(...prices);
        const max = Math.max(...prices);

        return min === max ? `${min}` : `${min} - ${max}`;
    }

    addNewSize(itemName: string) {
        this.ref = this.dialogService.open(AddEditSizeDialogComponent, {
            header: 'Add New Size for ' + itemName,
            width: '60%',
            modal: true,
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            closable: true,
            closeOnEscape: true
        });

        this.ref.onClose.subscribe((size: Size) => {
            if (size) {
                this.items.find((element) => element.sizes.push(size));
            }
        });
    }
}
