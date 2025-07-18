import { useEffect } from "react";
import { useProductUser } from "../stores/useProductUser";

const SelectedUser = () => {

    const users = useProductUser((state) => state.users);
    const selectedUser = useProductUser((state) => state.selectedUser);
    const checkUser = useProductUser((state) => state.checkUser)


    useEffect(() => {
        checkUser();
    }, [ users ])

    return (
        <div className="selected-user">
            <h1>{selectedUser?.name}</h1>
        </div>
    )
}
export default SelectedUser