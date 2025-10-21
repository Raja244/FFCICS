import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from 'primeng/button';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AreaType, SanghaMasterData } from '../../master-data/sangha-master-data/sangha.modal';
import { Fieldset } from 'primeng/fieldset';

@Component({
    selector: 'app-add-new-sangha-dialog',
    imports: [FormsModule, Button, Select, InputText, Fieldset],
    templateUrl: './add-new-sangha-dialog.component.html',
    styleUrl: './add-new-sangha-dialog.component.scss',
    providers: [DialogService]
})
export class AddNewSanghaDialogComponent {
    statuses: any[] | undefined;
    area: SanghaMasterData = {
        nameOfArea: '',
        areaType: AreaType.MUNICIPALITY,
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
