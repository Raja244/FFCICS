import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { SanghaMasterData } from '../sangha.modal';
import { AvatarLabelPipe } from '../../../../shared/pipes/avatar-label.pipe';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-sangha-table-data',
    imports: [TableModule, TreeTableModule, Accordion, AccordionPanel, AccordionHeader, Avatar, Badge, AccordionContent, Button, AvatarLabelPipe, NgClass],
    templateUrl: './sangha-table-data.component.html',
    styleUrl: './sangha-table-data.component.scss'
})
export class SanghaTableDataComponent {
    @Input() areas: SanghaMasterData[] = [];
    styles = ['avatar-1', 'avatar-2', 'avatar-3', 'avatar-4'];

    getRandomStyle(): string {
        const index = Math.floor(Math.random() * this.styles.length);
        return this.styles[index];
    }
}
