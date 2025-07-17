import { useEffect, useState } from "react";
import { type ProductType } from "../Types/Type";
import { useUserStore } from "../stores/useUserStore"
import { useProductStore } from "../stores/useProductStore";
const SelectedUser = () => {

    const selectedUser = useUserStore(state => state.selectedUser);
    const products = useProductStore(state => state.products);
    const deleteAllProducts  = useProductStore(state => state.deleteAllProduct)

    const [ product, setProduct ] = useState<ProductType | {}>({});

    useEffect(() => {
        deleteAllProducts();
    }, [selectedUser])

    return (
        <div className="selected-user">
            <h1>{selectedUser?.name}</h1>
        </div>
    )
}
export default SelectedUser