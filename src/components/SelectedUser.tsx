import { useUserStore } from "../stores/useUserStore"
const SelectedUser = () => {

    const selectedUser = useUserStore(state => state.selectedUser);

    return (
        <div className="selected-user">
            <h1>{selectedUser?.name}</h1>
        </div>
    )
}
export default SelectedUser