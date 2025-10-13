import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../pages/service/product.service';
import { TableModule } from 'primeng/table';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';
import { tab } from '../../common.modals';
import { ItemTableDataComponent } from './item-table-data/item-table-data.component';
import { Gender, Item } from './item.modal';

@Component({
    selector: 'app-item-master-data',
    templateUrl: './item-master-data.component.html',
    styleUrl: './item-master-data.component.scss',
    imports: [
        TableModule,
        SelectModule,
        ToastModule,
        ToolbarModule,
        InputTextModule,
        TextareaModule,
        CommonModule,
        DropdownModule,
        InputTextModule,
        FormsModule,
        IconFieldModule,
        InputIconModule,
        Button,
        TabList,
        TabPanel,
        TabPanels,
        Tabs,
        ItemTableDataComponent,
        Tab
    ],
    providers: [MessageService, ConfirmationService, ProductService]
})
export class ItemMasterDataComponent implements OnInit {
    selectedTab = 0;
    tabs: tab[] = [];
    items: Item[] = [];

    ngOnInit(): void {
        this.loadItemData();
        this.loadTabs();
    }

    loadTabs() {
        this.tabs = [
            {
                title: 'Boys',
                value: 0,
                content: this.items.filter((item) => item.gender === Gender.BOYS)
            },
            {
                title: 'Girls',
                value: 1,
                content: this.items.filter((item) => item.gender === Gender.GIRLS)
            }
        ];
    }

    loadItemData() {
        this.items = [
            {
                itemName: 'T-Shirt Classic',
                gender: Gender.BOYS,
                availableSizes: '24, 26, 28, 30',
                priceRange: '150 - 250',
                sizes: [
                    { sizeNo: 24, fabricRequired: 0.8, price: 150 },
                    { sizeNo: 26, fabricRequired: 0.9, price: 180 },
                    { sizeNo: 28, fabricRequired: 1.0, price: 220 },
                    { sizeNo: 30, fabricRequired: 1.1, price: 250 }
                ]
            },
            {
                itemName: 'T-Shirt Cute Print',
                gender: Gender.GIRLS,
                availableSizes: '22, 24, 26, 28',
                priceRange: '160 - 260',
                sizes: [
                    { sizeNo: 22, fabricRequired: 0.7, price: 160 },
                    { sizeNo: 24, fabricRequired: 0.8, price: 190 },
                    { sizeNo: 26, fabricRequired: 0.9, price: 230 },
                    { sizeNo: 28, fabricRequired: 1.0, price: 260 }
                ]
            },
            {
                itemName: 'Shirt Formal',
                gender: Gender.BOYS,
                availableSizes: '28, 30, 32',
                priceRange: '250 - 350',
                sizes: [
                    { sizeNo: 28, fabricRequired: 1.2, price: 250 },
                    { sizeNo: 30, fabricRequired: 1.3, price: 300 },
                    { sizeNo: 32, fabricRequired: 1.4, price: 350 }
                ]
            },
            {
                itemName: 'Frock Floral',
                gender: Gender.GIRLS,
                availableSizes: '20, 22, 24, 26',
                priceRange: '200 - 320',
                sizes: [
                    { sizeNo: 20, fabricRequired: 0.9, price: 200 },
                    { sizeNo: 22, fabricRequired: 1.0, price: 240 },
                    { sizeNo: 24, fabricRequired: 1.1, price: 280 },
                    { sizeNo: 26, fabricRequired: 1.2, price: 320 }
                ]
            },
            {
                itemName: 'Jeans Slim Fit',
                gender: Gender.BOYS,
                availableSizes: '26, 28, 30, 32',
                priceRange: '350 - 500',
                sizes: [
                    { sizeNo: 26, fabricRequired: 1.0, price: 350 },
                    { sizeNo: 28, fabricRequired: 1.1, price: 400 },
                    { sizeNo: 30, fabricRequired: 1.2, price: 450 },
                    { sizeNo: 32, fabricRequired: 1.3, price: 500 }
                ]
            },
            {
                itemName: 'Skirt Pleated',
                gender: Gender.GIRLS,
                availableSizes: '22, 24, 26, 28',
                priceRange: '220 - 350',
                sizes: [
                    { sizeNo: 22, fabricRequired: 0.7, price: 220 },
                    { sizeNo: 24, fabricRequired: 0.8, price: 260 },
                    { sizeNo: 26, fabricRequired: 0.9, price: 300 },
                    { sizeNo: 28, fabricRequired: 1.0, price: 350 }
                ]
            },
            {
                itemName: 'Shorts Casual',
                gender: Gender.BOYS,
                availableSizes: '24, 26, 28',
                priceRange: '180 - 260',
                sizes: [
                    { sizeNo: 24, fabricRequired: 0.6, price: 180 },
                    { sizeNo: 26, fabricRequired: 0.7, price: 220 },
                    { sizeNo: 28, fabricRequired: 0.8, price: 260 }
                ]
            },
            {
                itemName: 'Leggings Stretch',
                gender: Gender.GIRLS,
                availableSizes: '20, 22, 24, 26, 28',
                priceRange: '150 - 230',
                sizes: [
                    { sizeNo: 20, fabricRequired: 0.5, price: 150 },
                    { sizeNo: 22, fabricRequired: 0.6, price: 170 },
                    { sizeNo: 24, fabricRequired: 0.7, price: 190 },
                    { sizeNo: 26, fabricRequired: 0.8, price: 210 },
                    { sizeNo: 28, fabricRequired: 0.9, price: 230 }
                ]
            },
            {
                itemName: 'Hoodie Warm',
                gender: Gender.BOYS,
                availableSizes: '28, 30, 32, 34',
                priceRange: '400 - 600',
                sizes: [
                    { sizeNo: 28, fabricRequired: 1.3, price: 400 },
                    { sizeNo: 30, fabricRequired: 1.4, price: 450 },
                    { sizeNo: 32, fabricRequired: 1.6, price: 520 },
                    { sizeNo: 34, fabricRequired: 1.8, price: 600 }
                ]
            },
            {
                itemName: 'Dress Party Wear',
                gender: Gender.GIRLS,
                availableSizes: '24, 26, 28, 30',
                priceRange: '450 - 700',
                sizes: [
                    { sizeNo: 24, fabricRequired: 1.2, price: 450 },
                    { sizeNo: 26, fabricRequired: 1.3, price: 520 },
                    { sizeNo: 28, fabricRequired: 1.5, price: 600 },
                    { sizeNo: 30, fabricRequired: 1.7, price: 700 }
                ]
            },
            {
                itemName: 'Dress Party Wear B',
                gender: Gender.GIRLS,
                availableSizes: '24, 26, 28, 30',
                priceRange: '450 - 700',
                sizes: []
            }
        ];
    }

    openNew() {}
}
