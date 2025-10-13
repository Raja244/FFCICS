import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { SanghaMasterData } from '../sangha.modal';

@Component({
    selector: 'app-sangha-table-data',
    imports: [TableModule, TreeTableModule, Accordion, AccordionPanel, AccordionHeader, Avatar, Badge, AccordionContent, Button],
    templateUrl: './sangha-table-data.component.html',
    styleUrl: './sangha-table-data.component.scss'
})
export class SanghaTableDataComponent {
    @Input()
    areas: SanghaMasterData[] = [];
}
