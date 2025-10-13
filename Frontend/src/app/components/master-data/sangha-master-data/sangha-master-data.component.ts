import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { Toolbar } from 'primeng/toolbar';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';
import { SanghaTableDataComponent } from './sangha-table-data/sangha-table-data.component';
import { AreaType, SanghaMasterData, SanghaStatus } from './sangha.modal';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { InputText } from 'primeng/inputtext';

interface tab {
    title: string;
    value: number;
    content: SanghaMasterData[];
}

@Component({
    selector: 'app-sangha-master-data',
    imports: [TableModule, Button, Toolbar, Tabs, TabList, TabPanels, Tab, SanghaTableDataComponent, TabPanel, InputIcon, IconField, InputText],
    templateUrl: './sangha-master-data.component.html',
    styleUrl: './sangha-master-data.component.scss'
})
export class SanghaMasterDataComponent implements OnInit {
    areas: SanghaMasterData[] = [];
    tabs: tab[] = [];
    selectedTab = 0;

    ngOnInit() {
        this.areas = [
            {
                id: 1,
                nameOfArea: 'Falakata Municipality',
                areaType: AreaType.MUNICIPALITY,
                sanghas: [
                    {
                        id: 1,
                        name: 'Falakata Mahila Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 10,
                        address: { district: 'Alipurduar', state: 'West Bengal', country: 'India' },
                        representatives: [
                            { id: 1, name: 'Raja Saha', phoneNumber: '9876543210' },
                            { id: 2, name: 'Kamal Saha', phoneNumber: '9123456780' }
                        ],
                        createdAt: '2025-01-01T10:00:00Z',
                        updatedAt: '2025-01-10T15:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 2,
                        name: 'Falakata Women Group',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 6,
                        address: { district: 'Alipurduar', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 3, name: 'Priya Das', phoneNumber: '9000000001' }],
                        createdAt: '2025-01-02T10:00:00Z',
                        updatedAt: '2025-01-10T15:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 3,
                        name: 'Falakata Community Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 8,
                        address: { district: 'Alipurduar', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 4, name: 'Anita Roy', phoneNumber: '9111111111' }],
                        createdAt: '2025-01-03T10:00:00Z',
                        updatedAt: '2025-01-10T15:00:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 2,
                nameOfArea: 'Alipur Block',
                areaType: AreaType.BLOCK,
                sanghas: [
                    {
                        id: 4,
                        name: 'Alipur Block Sangha A',
                        status: SanghaStatus.INACTIVE,
                        memberCount: 3,
                        address: { district: 'Alipurduar', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 5, name: 'Suman Das', phoneNumber: '9000000002' }],
                        createdAt: '2025-01-04T10:00:00Z',
                        updatedAt: '2025-01-10T15:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 5,
                        name: 'Alipur Block Sangha B',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 5,
                        address: { district: 'Alipurduar', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 6, name: 'Rahul Sharma', phoneNumber: '9333333333' }],
                        createdAt: '2025-01-05T10:00:00Z',
                        updatedAt: '2025-01-10T15:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 6,
                        name: 'Alipur Mahila Seva',
                        status: SanghaStatus.INACTIVE,
                        memberCount: 4,
                        address: { district: 'Alipurduar', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 7, name: 'Laxmi Roy', phoneNumber: '9000000100' }],
                        createdAt: '2025-02-01T09:00:00Z',
                        updatedAt: '2025-02-10T11:00:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 3,
                nameOfArea: 'Siliguri Municipality',
                areaType: AreaType.MUNICIPALITY,
                sanghas: [
                    {
                        id: 7,
                        name: 'Siliguri Women Empowerment',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 12,
                        address: { district: 'Darjeeling', state: 'West Bengal', country: 'India' },
                        representatives: [
                            { id: 8, name: 'Mita Paul', phoneNumber: '9444444444' },
                            { id: 9, name: 'Sneha Ghosh', phoneNumber: '9555555555' }
                        ],
                        createdAt: '2025-01-06T10:00:00Z',
                        updatedAt: '2025-01-10T15:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 8,
                        name: 'Siliguri Community Sangha',
                        status: SanghaStatus.INACTIVE,
                        memberCount: 7,
                        address: { district: 'Darjeeling', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 10, name: 'Priyanka Das', phoneNumber: '9666666666' }],
                        createdAt: '2025-01-07T10:00:00Z',
                        updatedAt: '2025-01-10T15:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 9,
                        name: 'Siliguri Kala Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 9,
                        address: { district: 'Darjeeling', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 11, name: 'Ritu Sen', phoneNumber: '9400000001' }],
                        createdAt: '2025-03-01T08:00:00Z',
                        updatedAt: '2025-03-10T12:00:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 4,
                nameOfArea: 'CoochBehar Block',
                areaType: AreaType.BLOCK,
                sanghas: [
                    {
                        id: 10,
                        name: 'CoochBehar Block Sangha A',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 4,
                        address: { district: 'Cooch Behar', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 12, name: 'Rahul Roy', phoneNumber: '9777777777' }],
                        createdAt: '2025-01-08T10:00:00Z',
                        updatedAt: '2025-01-10T15:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 11,
                        name: 'CoochBehar Women Group',
                        status: SanghaStatus.INACTIVE,
                        memberCount: 2,
                        address: { district: 'Cooch Behar', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 13, name: 'Ananya Ghosh', phoneNumber: '9888888888' }],
                        createdAt: '2025-01-09T10:00:00Z',
                        updatedAt: '2025-01-10T15:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 12,
                        name: 'CoochBehar Krishi Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 5,
                        address: { district: 'Cooch Behar', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 14, name: 'Manju K', phoneNumber: '9777000002' }],
                        createdAt: '2025-02-12T09:30:00Z',
                        updatedAt: '2025-02-20T14:00:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 5,
                nameOfArea: 'Jalpaiguri Municipality',
                areaType: AreaType.MUNICIPALITY,
                sanghas: [
                    {
                        id: 13,
                        name: 'Jalpaiguri Women Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 9,
                        address: { district: 'Jalpaiguri', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 15, name: 'Anita Sen', phoneNumber: '9111222333' }],
                        createdAt: '2025-01-10T10:00:00Z',
                        updatedAt: '2025-01-10T15:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 14,
                        name: 'Jalpaiguri Craft Circle',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 6,
                        address: { district: 'Jalpaiguri', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 16, name: 'Soma Roy', phoneNumber: '9112000001' }],
                        createdAt: '2025-02-11T11:00:00Z',
                        updatedAt: '2025-02-12T13:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 15,
                        name: 'Jalpaiguri Sewing Collective',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 11,
                        address: { district: 'Jalpaiguri', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 17, name: 'Rina Das', phoneNumber: '9112000002' }],
                        createdAt: '2025-03-05T09:00:00Z',
                        updatedAt: '2025-03-10T10:00:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 6,
                nameOfArea: 'Kolkata South Municipality',
                areaType: AreaType.MUNICIPALITY,
                sanghas: [
                    {
                        id: 16,
                        name: 'Kolkata South Mahila Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 25,
                        address: { district: 'Kolkata', state: 'West Bengal', country: 'India' },
                        representatives: [
                            { id: 18, name: 'Nidhi Banerjee', phoneNumber: '9000111122' },
                            { id: 19, name: 'Ruma Mitra', phoneNumber: '9000111133' }
                        ],
                        createdAt: '2025-01-15T07:00:00Z',
                        updatedAt: '2025-02-01T12:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 17,
                        name: 'Kolkata Handloom Circle',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 18,
                        address: { district: 'Kolkata', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 20, name: 'Sukanya Roy', phoneNumber: '9000111144' }],
                        createdAt: '2025-02-05T10:30:00Z',
                        updatedAt: '2025-02-20T16:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 18,
                        name: 'Kolkata Women Weavers',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 7,
                        address: { district: 'Kolkata', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 21, name: 'Minu Ghosh', phoneNumber: '9000111155' }],
                        createdAt: '2025-03-01T08:45:00Z',
                        updatedAt: '2025-03-10T09:30:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 7,
                nameOfArea: 'Howrah Block',
                areaType: AreaType.BLOCK,
                sanghas: [
                    {
                        id: 19,
                        name: 'Howrah Sewing Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 14,
                        address: { district: 'Howrah', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 22, name: 'Babu Roy', phoneNumber: '9000222233' }],
                        createdAt: '2025-01-20T09:00:00Z',
                        updatedAt: '2025-02-10T11:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 20,
                        name: 'Howrah Mahila Udyog',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 5,
                        address: { district: 'Howrah', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 23, name: 'Sabina K', phoneNumber: '9000222244' }],
                        createdAt: '2025-02-02T10:00:00Z',
                        updatedAt: '2025-02-10T14:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 21,
                        name: 'Howrah Community Tailors',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 9,
                        address: { district: 'Howrah', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 24, name: 'Tapan S', phoneNumber: '9000222255' }],
                        createdAt: '2025-02-25T08:00:00Z',
                        updatedAt: '2025-03-01T13:00:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 8,
                nameOfArea: 'Bardhaman Municipality',
                areaType: AreaType.MUNICIPALITY,
                sanghas: [
                    {
                        id: 22,
                        name: 'Bardhaman Mahila Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 13,
                        address: { district: 'Purba Bardhaman', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 25, name: 'Gita Pal', phoneNumber: '9000333344' }],
                        createdAt: '2025-01-25T11:00:00Z',
                        updatedAt: '2025-02-10T15:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 23,
                        name: 'Bardhaman Weavers Circle',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 6,
                        address: { district: 'Purba Bardhaman', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 26, name: 'Harsha K', phoneNumber: '9000333355' }],
                        createdAt: '2025-02-01T10:00:00Z',
                        updatedAt: '2025-02-15T13:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 24,
                        name: 'Bardhaman Sewing Co-op',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 8,
                        address: { district: 'Purba Bardhaman', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 27, name: 'Rakesh D', phoneNumber: '9000333366' }],
                        createdAt: '2025-02-18T09:30:00Z',
                        updatedAt: '2025-03-01T12:30:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 9,
                nameOfArea: 'Nadia Block',
                areaType: AreaType.BLOCK,
                sanghas: [
                    {
                        id: 25,
                        name: 'Nadia Mahila Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 11,
                        address: { district: 'Nadia', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 28, name: 'Mala Saha', phoneNumber: '9000444455' }],
                        createdAt: '2025-01-30T08:00:00Z',
                        updatedAt: '2025-02-10T14:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 26,
                        name: 'Nadia Handloom Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 4,
                        address: { district: 'Nadia', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 29, name: 'Subhra K', phoneNumber: '9000444466' }],
                        createdAt: '2025-02-05T09:15:00Z',
                        updatedAt: '2025-02-20T10:45:00Z',
                        remarks: ''
                    },
                    {
                        id: 27,
                        name: 'Nadia Sewing Group',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 7,
                        address: { district: 'Nadia', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 30, name: 'Anupam P', phoneNumber: '9000444477' }],
                        createdAt: '2025-03-01T09:00:00Z',
                        updatedAt: '2025-03-10T11:00:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 10,
                nameOfArea: 'Murshidabad Municipality',
                areaType: AreaType.MUNICIPALITY,
                sanghas: [
                    {
                        id: 28,
                        name: 'Murshidabad Women Group',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 15,
                        address: { district: 'Murshidabad', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 31, name: 'Farzana K', phoneNumber: '9000555566' }],
                        createdAt: '2025-02-01T10:00:00Z',
                        updatedAt: '2025-02-15T15:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 29,
                        name: 'Murshidabad Craft Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 6,
                        address: { district: 'Murshidabad', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 32, name: 'Rafiq A', phoneNumber: '9000555577' }],
                        createdAt: '2025-02-10T11:00:00Z',
                        updatedAt: '2025-03-01T12:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 30,
                        name: 'Murshidabad Sewing Co-op',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 9,
                        address: { district: 'Murshidabad', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 33, name: 'Rina K', phoneNumber: '9000555588' }],
                        createdAt: '2025-03-05T09:00:00Z',
                        updatedAt: '2025-03-10T10:30:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 11,
                nameOfArea: 'Malda Block',
                areaType: AreaType.BLOCK,
                sanghas: [
                    {
                        id: 31,
                        name: 'Malda Women Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 8,
                        address: { district: 'Malda', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 34, name: 'Kusum P', phoneNumber: '9000666677' }],
                        createdAt: '2025-02-05T08:30:00Z',
                        updatedAt: '2025-02-20T10:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 32,
                        name: 'Malda Handloom Collective',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 10,
                        address: { district: 'Malda', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 35, name: 'Sujan M', phoneNumber: '9000666688' }],
                        createdAt: '2025-02-15T11:00:00Z',
                        updatedAt: '2025-03-01T13:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 33,
                        name: 'Malda Sewing Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 5,
                        address: { district: 'Malda', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 36, name: 'Rupa D', phoneNumber: '9000666699' }],
                        createdAt: '2025-03-01T09:30:00Z',
                        updatedAt: '2025-03-10T11:30:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 12,
                nameOfArea: 'Birbhum Municipality',
                areaType: AreaType.MUNICIPALITY,
                sanghas: [
                    {
                        id: 34,
                        name: 'Birbhum Women Group',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 12,
                        address: { district: 'Birbhum', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 37, name: 'Sabitri N', phoneNumber: '9000777788' }],
                        createdAt: '2025-02-10T10:45:00Z',
                        updatedAt: '2025-03-01T12:45:00Z',
                        remarks: ''
                    },
                    {
                        id: 35,
                        name: 'Birbhum Weavers Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 4,
                        address: { district: 'Birbhum', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 38, name: 'Hemanta B', phoneNumber: '9000777799' }],
                        createdAt: '2025-03-01T09:00:00Z',
                        updatedAt: '2025-03-10T10:30:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 13,
                nameOfArea: 'Bankura Block',
                areaType: AreaType.BLOCK,
                sanghas: [
                    {
                        id: 36,
                        name: 'Bankura Mahila Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 9,
                        address: { district: 'Bankura', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 39, name: 'Manju B', phoneNumber: '9000888899' }],
                        createdAt: '2025-02-12T08:00:00Z',
                        updatedAt: '2025-03-01T11:00:00Z',
                        remarks: ''
                    },
                    {
                        id: 37,
                        name: 'Bankura Tailors Collective',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 3,
                        address: { district: 'Bankura', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 40, name: 'Kamal P', phoneNumber: '9000888800' }],
                        createdAt: '2025-03-05T09:30:00Z',
                        updatedAt: '2025-03-10T12:30:00Z',
                        remarks: ''
                    }
                ]
            },
            {
                id: 14,
                nameOfArea: 'Paschim Medinipur Municipality',
                areaType: AreaType.MUNICIPALITY,
                sanghas: [
                    {
                        id: 38,
                        name: 'Paschim Medinipur Women Sangha',
                        status: SanghaStatus.ACTIVE,
                        memberCount: 14,
                        address: { district: 'Paschim Medinipur', state: 'West Bengal', country: 'India' },
                        representatives: [{ id: 41, name: 'Lila M', phoneNumber: '9000999900' }],
                        createdAt: '2025-02-15T10:00:00Z',
                        updatedAt: '2025-03-01T14:00:00Z',
                        remarks: ''
                    }
                ]
            }
        ];
        this.tabs = [
            { title: 'Block', value: 0, content: this.areas.filter((elements) => elements.areaType === AreaType.BLOCK) },
            { title: 'Municipality', value: 1, content: this.areas.filter((elements) => elements.areaType === AreaType.MUNICIPALITY) }
        ];
    }

    openNew() {}
}
