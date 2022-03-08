import React, { useState } from "react";
import FriendsContext, { Friend } from './FriendsContext';


const FriendsContextProvider: React.FC = props => {
    const [friends, setFriends] = useState<Friend[]>([]);
    const addFriend1 = ( id:string, nama:string, keterangan:string, gender:string, image:string) => {
        const newFriend: Friend ={
            id:id,
            nama:nama,
            keterangan:keterangan,
            gender:gender,
            image:image
        }
        setFriends((currFriend) => {return currFriend.concat(newFriend)})
     };
     
    const deleteFriend1 = (id:string) => { 
        for(let i=0 ;i<friends.length; i++){
            if(friends[i].id ==id){
                friends.splice(i,1);
                break;
            }
        }
    }

    return (
        <FriendsContext.Provider value={{
            friends,
            addFriend: addFriend1,
            deleteFriend: deleteFriend1
        }}>
            {props.children}
        </FriendsContext.Provider>
    );
};
export default FriendsContextProvider;


