export interface Item {
    itemName: string;
    gender?: Gender;
    sizes: Size[];
}

export interface Size {
    sizeNo?: number;
    fabricRequired?: number;
    price?: number;
}

export enum Gender {
    BOYS = 'BOYS',
    GIRLS = 'GIRLS'
}
