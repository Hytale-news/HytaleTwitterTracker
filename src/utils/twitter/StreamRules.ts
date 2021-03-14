export interface Datum {
    id: string;
    value: string;
    tag: string;
}

export interface Meta {
    sent: Date;
}

export interface StreamRules {
    data: Datum[];
    meta: Meta;
}