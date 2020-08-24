export interface Stock extends object {
    symbol: string;
    name: string;
    parent?: string;
    regNo: number;
}
