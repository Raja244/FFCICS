import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { Toolbar } from 'primeng/toolbar';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';
import { SanghaTableDataComponent } from './sangha-table-data/sangha-table-data.component';
import { AreaType, SanghaMasterData } from './sangha.modal';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputText } from 'primeng/inputtext';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddNewSanghaDialogComponent } from '../../dialogs/add-new-sangha-dialog/add-new-sangha-dialog.component';
import { tab } from '../../common.modals';

@Component({
    selector: 'app-sangha-master-data',
    imports: [TableModule, Button, Toolbar, SanghaTableDataComponent, TabPanel, InputIcon, IconField, InputText, Tab, Tabs, TabList, TabPanels],
    templateUrl: './sangha-master-data.component.html',
    styleUrl: './sangha-master-data.component.scss',
    providers: [DialogService]
})
export class SanghaMasterDataComponent implements OnInit {
    areas: SanghaMasterData[] = [];
    tabs: tab[] = [];
    selectedTab = 0;
    ref: DynamicDialogRef | undefined;

    constructor(
        public dialogService: DialogService,
    ) {}

    ngOnInit() {
        this.areas = [
            {
                nameOfArea: 'Falakata Municipality',
                areaType: AreaType.MUNICIPALITY,
                sanghas: [
                    {
                        id: 1,
                        name: 'Falakata Mahila Sangha',
                        address: { district: 'Alipurduar', state: 'West Bengal' },
                        representatives: [
                            { name: 'Raja Saha', phoneNumber: '9876543210' },
                            { name: 'Kamal Saha', phoneNumber: '9123456780' }
                        ]
                    },
                    {
                        id: 2,
                        name: 'Falakata Women Group',
                        address: { district: 'Alipurduar', state: 'West Bengal' },
                        representatives: [{ name: 'Priya Das', phoneNumber: '9000000001' }]
                    },
                    {
                        id: 3,
                        name: 'Falakata Community Sangha',
                        address: { district: 'Alipurduar', state: 'West Bengal' },
                        representatives: [{ name: 'Anita Roy', phoneNumber: '9111111111' }]
                    }
                ]
            },
            {
                nameOfArea: 'Alipur Block',
                areaType: AreaType.BLOCK,
                sanghas: [
                    {
                        id: 4,
                        name: 'Alipur Block Sangha A',
                        address: { district: 'Alipurduar', state: 'West Bengal' },
                        representatives: [{ name: 'Suman Das', phoneNumber: '9000000002' }]
                    },
                    {
                        id: 5,
                        name: 'Alipur Block Sangha B',
                        address: { district: 'Alipurduar', state: 'West Bengal' },
                        representatives: [{ name: 'Rahul Sharma', phoneNumber: '9333333333' }]
                    },
                    {
                        id: 6,
                        name: 'Alipur Mahila Seva',
                        address: { district: 'Alipurduar', state: 'West Bengal' },
                        representatives: [{ name: 'Laxmi Roy', phoneNumber: '9000000100' }]
                    }
                ]
            },
            {
                nameOfArea: 'Siliguri Municipality',
                areaType: AreaType.MUNICIPALITY,
                sanghas: [
                    {
                        id: 7,
                        name: 'Siliguri Women Empowerment',
                        address: { district: 'Darjeeling', state: 'West Bengal' },
                        representatives: [
                            { name: 'Mita Paul', phoneNumber: '9444444444' },
                            { name: 'Sneha Ghosh', phoneNumber: '9555555555' }
                        ]
                    },
                    {
                        id: 8,
                        name: 'Siliguri Community Sangha',
                        address: { district: 'Darjeeling', state: 'West Bengal' },
                        representatives: [{ name: 'Priyanka Das', phoneNumber: '9666666666' }]
                    },
                    {
                        id: 9,
                        name: 'Siliguri Kala Sangha',
                        address: { district: 'Darjeeling', state: 'West Bengal' },
                        representatives: [{ name: 'Ritu Sen', phoneNumber: '9400000001' }]
                    }
                ]
            },
            {
                nameOfArea: 'CoochBehar Block',
                areaType: AreaType.BLOCK,
                sanghas: [
                    {
                        id: 10,
                        name: 'CoochBehar Block Sangha A',
                        address: { district: 'Cooch Behar', state: 'West Bengal' },
                        representatives: [{ name: 'Rahul Roy', phoneNumber: '9777777777' }]
                    },
                    {
                        id: 11,
                        name: 'CoochBehar Women Group',
                        address: { district: 'Cooch Behar', state: 'West Bengal' },
                        representatives: [{ name: 'Ananya Ghosh', phoneNumber: '9888888888' }]
                    },
                    {
                        id: 12,
                        name: 'CoochBehar Krishi Sangha',
                        address: { district: 'Cooch Behar', state: 'West Bengal' },
                        representatives: [{ name: 'Manju K', phoneNumber: '9777000002' }]
                    }
                ]
            },
            {
                nameOfArea: 'Jalpaiguri Municipality',
                areaType: AreaType.MUNICIPALITY,
                sanghas: [
                    {
                        id: 13,
                        name: 'Jalpaiguri Women Sangha',
                        address: { district: 'Jalpaiguri', state: 'West Bengal' },
                        representatives: [{ name: 'Anita Sen', phoneNumber: '9111222333' }]
                    },
                    {
                        id: 14,
                        name: 'Jalpaiguri Craft Circle',
                        address: { district: 'Jalpaiguri', state: 'West Bengal' },
                        representatives: [{ name: 'Soma Roy', phoneNumber: '9112000001' }]
                    },
                    {
                        id: 15,
                        name: 'Jalpaiguri Sewing Collective',
                        address: { district: 'Jalpaiguri', state: 'West Bengal' },
                        representatives: [{ name: 'Rina Das', phoneNumber: '9112000002' }]
                    }
                ]
            }
        ];
        this.tabs = this.loadTabs();
    }

    openAddNewSangha() {
        this.ref = this.dialogService.open(AddNewSanghaDialogComponent, {
            header: 'Add New Sangha',
            width: '60%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            modal:true,
            maximizable: true,
            closable: true,
            closeOnEscape: true,
            data: {
                listOfAreaNames: this.areas.map((area) => area.nameOfArea)
            }
        });

        this.ref.onClose.subscribe((area: SanghaMasterData) => {
            if (area && area.nameOfArea) {
                this.updateAreas(area);
            }
        });
    }

    updateAreas(area: SanghaMasterData) {
        const existingArea = this.areas.find((areaElement) => areaElement.nameOfArea === area.nameOfArea);
        if (existingArea) {
            existingArea.sanghas.push(...area.sanghas);
        } else {
            this.areas.push(area);
        }
        this.tabs = this.loadTabs();
    }

    loadTabs(): tab[] {
        return [
            { title: 'Block', value: 0, content: this.areas.filter((elements) => elements.areaType === AreaType.BLOCK) },
            {
                title: 'Municipality',
                value: 1,
                content: this.areas.filter((elements) => elements.areaType === AreaType.MUNICIPALITY)
            }
        ];
    }
}
