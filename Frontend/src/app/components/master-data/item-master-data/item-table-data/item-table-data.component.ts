import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ItemSizeTableDataComponent } from './item-size-table-data/item-size-table-data.component';
import { Item } from '../item.modal';
import {Ripple} from "primeng/ripple";

@Component({
    selector: 'app-item-table-data',
    imports: [TableModule, Button, FormsModule, ItemSizeTableDataComponent, Ripple],
    templateUrl: './item-table-data.component.html',
    styleUrl: './item-table-data.component.scss'
})
export class ItemTableDataComponent {
    @Input() items: Item[] = [];
}
