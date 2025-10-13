export enum AreaType {
    BLOCK = 'BLOCK',
    MUNICIPALITY = 'MUNICIPALITY'
}

export enum SanghaStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive'
}

export interface Address {
    district: string;
    state: string;
    country: string;
    pinCode?: string;
    village?: string;
}

export interface Representative {
    id?: number; // <-- Recommended for uniqueness
    name: string;
    phoneNumber: string; // <-- Use string to preserve leading zero / formatting
}

export interface Sangha {
    id: number;
    name: string;
    status: SanghaStatus;
    memberCount: number; // renamed from "activity" for clarity
    address: Address;
    representatives: Representative[];

    createdAt?: string; // ISO date format
    updatedAt?: string;
    remarks?: string;
}

export interface SanghaMasterData {
    id: number;
    nameOfArea: string;
    areaType: AreaType;
    sanghas: Sangha[];
}
