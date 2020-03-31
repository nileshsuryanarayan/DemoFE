export interface Menu {
    menuName: String;
    route: String;
    id?: String; // id to be used as css selector
    submenus?: Menu[];
}