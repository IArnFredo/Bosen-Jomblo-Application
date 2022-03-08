import React from "react";


export interface Friend {
    id: string,
    nama: string,
    keterangan: string,
    gender: string,
    image:string
}
interface Context {
    friends: Friend[];
    addFriend: (id: string, nama: string, keterangan: string, gender: string, image:string) => void;
    deleteFriend: (id:string) => void;
}

const FriendsContext = React.createContext<Context>({
    friends: [],
    addFriend: () => { },
    deleteFriend: () => { }
});

export default FriendsContext;