import { IonButtons, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import React, { useContext, useImperativeHandle, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FriendContext from './FriendContext';

const TargetGebet: React.FC = () => {
    const friendCtx = useContext(FriendContext);
    const [actionSheet, setShowActionSheet] = useState(false);
    const [ids, setId] = useState<string>();

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
    console.log(friendCtx.friends);

    const deleteFriend = (id: string) => {
        slidingOptionsRef.current?.closeOpened();
        friendCtx.deleteFriend(id);
    }

    const actionSheetHandler = (id: string) => {
        setShowActionSheet(true);
        setId(id);
    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <Link to="/target_pasangan">
                            <IonIcon style={{ color: 'white', marginLeft: '10px' }} size='large' icon={personCircleOutline}></IonIcon>
                        </Link>
                    </IonButtons>

                    <IonButtons slot="end">
                        <IonMenuButton />
                    </IonButtons>
                     <IonTitle id='title-toolbar' className='left-lost'>Bosen Jomblo</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    )
};

export default TargetGebet;