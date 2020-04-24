export interface Stock extends Object {
    symbol: string;
    name: string;
    parent?: string;
    regNo: number;
}