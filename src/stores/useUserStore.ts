import { create } from "zustand";
import { type UserStoreType } from "../Types/Type";

let x = 1;

export const useUserStore = create<UserStoreType>((set, get) => ({
    users: [],
    selectedUser: null,

    addUser: ( name: string ) => {
        const { users: currentUsers } = get();
        set({ users:  currentUsers ? [ ...currentUsers,  { id: x++, name: name, platform: 'google'}] : [{ id: x++, name: name, platform: 'google' }] });    
    },

    deleteUser: ( id : number) => {
        const { users } = get();
        const filteredUsers = users.filter( user => user.id !== id );
        set({ users:  filteredUsers  });
    },

    selectUser: ( id: number ) => {
        const { users } = get();
        const selectUser = users.find( user => user.id === id ) || null
        set({ selectedUser: selectUser })
    },
    checkUser: () => {
        const { users } = get();
        if(users.length < 1) set({ selectedUser: null })
    }

}))