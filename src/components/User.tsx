import { useUserStore } from "../stores/useUserStore"

const User = () => {
    const users = useUserStore(state => state.users);
    const { addUser, deleteUser, selectUser } = useUserStore();
    return (
        <div>
            <div className="users-container">
                <button onClick={addUser}>Add new User</button>
                {users.map(user => (
                    <div className="user" key={user.id}>
                        <section>
                            <p>User Name - {user.name}</p>
                            <p>User Platform - {user.platform}</p>
                            <p>User ID - {user.id}</p>
                        </section>
                        <div className="action">
                            <button onClick={ () => { deleteUser(user.id) } }>Delete User</button>
                            <button onClick={ () => { selectUser(user.id) } }>Select User</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default User