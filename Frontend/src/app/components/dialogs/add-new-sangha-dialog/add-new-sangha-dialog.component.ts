import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AreaType, SanghaMasterData } from '../../master-data/sangha-master-data/sangha.modal';
import { Fieldset } from 'primeng/fieldset';
import {NgClass, NgIf} from "@angular/common";

@Component({
    selector: 'app-add-new-sangha-dialog',
    imports: [FormsModule, Button, Select, InputText, Fieldset, NgClass, NgIf],
    templateUrl: './add-new-sangha-dialog.component.html',
    styleUrl: './add-new-sangha-dialog.component.scss',
    providers: [DialogService]
})
export class AddNewSanghaDialogComponent {
    area: SanghaMasterData = {
        nameOfArea: undefined,
        areaType: undefined,
        sanghas: [
            {
                name: '',
                address: { district: '', state: '' },
                representatives: [{ name: '', phoneNumber: '' }]
            }
        ]
    };
    listOfAreaNames: string[] = [];
    protected readonly AreaType = AreaType;

    constructor(
        public config: DynamicDialogConfig,
        public ref: DynamicDialogRef
    ) {
        this.listOfAreaNames = config.data.listOfAreaNames;
    }

    addNetri() {
        this.area.sanghas[0].representatives.push({
            name: '',
            phoneNumber: ''
        });
    }

    deleteNetri() {
        this.area.sanghas[0].representatives.pop();
    }

    saveSangha() {
        this.ref.close(this.area);
    }

    closeDialog() {
        this.ref.close();
    }
}
