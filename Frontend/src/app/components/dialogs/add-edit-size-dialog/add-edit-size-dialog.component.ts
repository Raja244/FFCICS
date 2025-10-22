import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { Fieldset } from 'primeng/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { NgIf } from '@angular/common';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Size } from '../../master-data/item-master-data/item.modal';

@Component({
    selector: 'app-add-edit-size-dialog',
    imports: [Button, Fieldset, FormsModule, InputText, NgIf, ReactiveFormsModule],
    templateUrl: './add-edit-size-dialog.component.html',
    styleUrl: './add-edit-size-dialog.component.scss',
    providers: [DialogService]
})
export class AddEditSizeDialogComponent {
    size: Size = { sizeNo: undefined, price: undefined, fabricRequired: undefined };
    isEdit = false;
    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ) {
        if (config.data) {
            this.size = config.data.size;
            this.isEdit = true;
        }
    }

    closeDialog() {
        this.ref.close();
    }

    saveItem() {
        if (!this.isEdit) {
            this.ref.close(this.size);
        }
        this.ref.close();
    }
}
