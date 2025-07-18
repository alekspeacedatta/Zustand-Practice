import { useState } from "react";
import { useProductUser } from "../stores/useProductUser";

const User = () => {
    const [ name, setName ] = useState('');

    const users = useProductUser(state => state.users);
    const usersQuantityes = useProductUser(state => state.users.length)
    const { addUser, deleteUser, selectUser } = useProductUser();

    return (
        <div className="user-info">
            <section>
                <h1>User Name: {users[0] ? users[0].name : 'user does not exsist'}</h1>
                <p>User Platfor: {users[0] ? users[0].platform : 'user does not exsist'}</p>
                <span>User ID: {users[0] ? users[0].id : 'user does not exsist'}</span>
            </section>
            <form onSubmit={(e) => {e.preventDefault(), addUser(name) }}>
                <input type="text" onChange={e => setName(e.target.value)} placeholder="enter username" />
                <button type="submit" >Add new User</button>
            </form>
            <p>Users Quantity: {usersQuantityes}</p>
            <div className="users-container">
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