let x = 1;
export const productSlice = (set : any, get : any, api : any) => ({
    products: [],
    selectedUser: {},
    addProduct: () => {
        const { products } = get()
        set({ products:  products ? [ ...products, { id: x++, name: 'uto', price: 320 }] : [{ id: x++, name: 'uto', price: 320 }]})
    },
    deleteProduct: (id: number) => {
        const { products } = get();
        const filteredProducts = products?.filter( (product : any) => product.id !== id);
        set({ products: filteredProducts })
    },
    deleteAllProduct: () => {
        set({ products: [] })
    }

})