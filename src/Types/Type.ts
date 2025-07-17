export interface ProductType {
    id: number,
    name: string,
    price: number
}
export interface ProductStoreType {
    products: ProductType[],
    addProduct: () => void;
    deleteAllProduct: () => void;
    deleteProduct: ( id: number ) => void;
}
export interface UserType {
    id: number,
    name: string,
    platform: string
}
export interface UserStoreType {
    users: UserType[],
    selectedUser: UserType | null,
    addUser: () => void,
    deleteUser: ( id: number ) => void;
    selectUser: ( id: number ) => void;
}