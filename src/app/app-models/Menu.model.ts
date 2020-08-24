export interface Menu {
    menuName: string;
    route: string;
    id?: string; // id to be used as css selector
    submenus?: Menu[];
}
