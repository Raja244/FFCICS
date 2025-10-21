export enum AreaType {
    BLOCK = 'BLOCK',
    MUNICIPALITY = 'MUNICIPALITY'
}

export interface Address {
    district: string;
    state: string;
    pinCode?: string;
    village?: string;
}

export interface Representative {
    name: string;
    phoneNumber: string; // <-- Use string to preserve leading zero / formatting
}

export interface Sangha {
    id?: number;
    name: string;
    address: Address;
    representatives: Representative[];
}

export interface SanghaMasterData {
    nameOfArea: string;
    areaType: AreaType;
    sanghas: Sangha[];
}
