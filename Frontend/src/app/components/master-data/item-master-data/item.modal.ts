export interface Item {
    itemName: string;
    gender: Gender;
    availableSizes: string;
    priceRange: string;
    sizes: Size[];
}

export interface Size {
    sizeNo: number;
    fabricRequired: number;
    price: number;
}

export enum Gender {
    BOYS = 'boys',
    GIRLS = 'girls'
}
