import { useEffect } from "react";
import { useUserStore } from "../stores/useUserStore"
import { useProductStore } from "../stores/useProductStore";

const SelectedUser = () => {

    const users = useUserStore(state => state.users);
    const selectedUser = useUserStore(state => state.selectedUser);
    const checkUser = useUserStore(state => state.checkUser)
    const deleteAllProducts  = useProductStore(state => state.deleteAllProduct)


    useEffect(() => {
        deleteAllProducts();
        checkUser();
    }, [selectedUser, users])

    return (
        <div className="selected-user">
            <h1>{selectedUser?.name}</h1>
        </div>
    )
}
export default SelectedUser