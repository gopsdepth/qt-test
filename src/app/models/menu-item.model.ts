export interface MenuItemModel {
    id: string;
    caption: string;
    isActive: boolean;
    children?: MenuItemModel[] | null;
    routerLink?: any[] | null;
}
