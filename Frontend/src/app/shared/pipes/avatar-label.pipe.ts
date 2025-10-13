import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'avatarLabel'
})
export class AvatarLabelPipe implements PipeTransform {
    transform(value: string | null | undefined): string {
        if (!value) return '';

        const words = value.trim().split(/\s+/).filter(Boolean);
        if (words.length === 0) return '';
        if (words.length === 1) return words[0];

        const firstWord = words[0].charAt(0);
        const lastInitial = words[words.length - 1].charAt(0);

        return `${firstWord}${lastInitial}`;
    }
}
