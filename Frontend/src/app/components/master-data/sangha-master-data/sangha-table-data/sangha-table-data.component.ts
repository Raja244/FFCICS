import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { SanghaMasterData } from '../sangha.modal';
import { AvatarLabelPipe } from '../../../../shared/pipes/avatar-label.pipe';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-sangha-table-data',
    imports: [TableModule, TreeTableModule, Accordion, AccordionPanel, AccordionHeader, Avatar, Badge, AccordionContent, Button, AvatarLabelPipe, UpperCasePipe],
    templateUrl: './sangha-table-data.component.html',
    styleUrl: './sangha-table-data.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SanghaTableDataComponent {
    @Input() areas: SanghaMasterData[] = [];
}
