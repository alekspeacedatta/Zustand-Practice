import { create } from "zustand";
import { type ProductStoreType } from "../Types/Type";

let x = 1;

export const useProductStore = create<ProductStoreType>((set, get) => ({
    products: [],
    selectedUser: {},
    addProduct: () => {
        const { products } = get()
        set({ products:  products ? [ ...products, { id: x++, name: 'uto', price: 320 }] : [{ id: x++, name: 'uto', price: 320 }]})
    },
    deleteProduct: (id: number) => {
        const { products } = get();
        const filteredProducts = products?.filter(product => product.id !== id);
        set({ products: filteredProducts })
    },
    deleteAllProduct: () => {
        set({ products: [] })
    }

}))