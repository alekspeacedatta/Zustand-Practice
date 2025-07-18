import { useEffect } from "react";
import { useUserStore } from "../stores/useUserStore"

const SelectedUser = () => {

    const users = useUserStore((state) => state.users);
    const selectedUser = useUserStore((state) => state.selectedUser);
    const checkUser = useUserStore((state) => state.checkUser)


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