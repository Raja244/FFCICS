import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Size } from '../../item.modal';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddEditSizeDialogComponent } from '../../../../dialogs/add-edit-size-dialog/add-edit-size-dialog.component';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';

@Component({
    selector: 'app-item-size-table-data',
    imports: [ConfirmDialog, Button, CurrencyPipe, TableModule],
    templateUrl: './item-size-table-data.component.html',
    styleUrl: './item-size-table-data.component.scss',
    providers: [DialogService, ConfirmationService]
})
export class ItemSizeTableDataComponent {
    @Input() sizes: Size[] = [];
    @Input() itemName: string = '';
    ref: DynamicDialogRef | undefined;

    constructor(
        public dialogService: DialogService,
        private confirmationService: ConfirmationService
    ) {}

    get sortedSizes() {
        return [...this.sizes].sort((a, b) => (a.sizeNo ?? 0) - (b.sizeNo ?? 0));
    }

    deleteProduct(size: Size) {
        this.confirmationService.confirm({
            header: 'Are you sure?',
            message: 'You want to delete Size No: ' + size.sizeNo,
            accept: () => {
                this.sizes.splice(
                    this.sizes.findIndex((element) => element.sizeNo === size.sizeNo),
                    1
                );
            },
            reject: () => {}
        });
    }

    editProduct(size: Size) {
        this.ref = this.dialogService.open(AddEditSizeDialogComponent, {
            header: 'Edit ' + size.sizeNo + ' Size for ' + this.itemName,
            width: '60%',
            modal: true,
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            closable: true,
            closeOnEscape: true,
            data: {
                size: size
            }
        });
    }
}
