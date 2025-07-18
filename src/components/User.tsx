import { useState } from "react";
import { useProductUser } from "../stores/useProductUser";

const User = () => {
    const [ name, setName ] = useState('');

    const users = useProductUser(state => state.users);
    const { addUser, deleteUser, selectUser } = useProductUser();

    return (
        <div>
            <div className="users-container">
                <form onSubmit={(e) => {e.preventDefault(), addUser(name) }}>
                    <input type="text" onChange={e => setName(e.target.value)} placeholder="enter username" />
                    <button type="submit" >Add new User</button>
                </form>
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