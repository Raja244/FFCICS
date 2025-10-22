import {Component} from '@angular/core';
import {Button} from "primeng/button";
import {Fieldset} from "primeng/fieldset";
import {InputText} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Select} from "primeng/select";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {Gender, Item} from "../../master-data/item-master-data/item.modal";
import {AreaType} from "../../master-data/sangha-master-data/sangha.modal";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-new-item-dialog',
    imports: [
        Button,
        Fieldset,
        InputText,
        ReactiveFormsModule,
        Select,
        FormsModule,
        NgIf
    ],
  templateUrl: './add-new-item-dialog.component.html',
  styleUrl: './add-new-item-dialog.component.scss',
    providers: [DialogService]
})
export class AddNewItemDialogComponent {
    Gender = Gender;
    constructor(
        public ref: DynamicDialogRef
    ) {
    }

    item: Item = {
        itemName: '',
        gender: undefined,
        sizes: [
            { sizeNo: undefined, fabricRequired: undefined, price: undefined  }
        ],
    };

    addSize() {
        this.item.sizes.push({ sizeNo: undefined, fabricRequired: undefined, price: undefined });
    }

    deleteSize() {
        if (this.item.sizes.length > 0) {
            this.item.sizes.pop();
        }
    }

    closeDialog() {
        this.ref.close();
    }

    saveItem() {
        this.ref.close(this.item);
    }

}
