import { IonActionSheet, IonButton, IonButtons,  IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { arrowBackCircleOutline, closeOutline, femaleOutline, maleOutline, personCircleOutline, trash } from 'ionicons/icons';
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FriendsContext from './FriendsContext';
import './TargetGebet.css';

const TargetGebet: React.FC = () => {
    const friendCtx = useContext(FriendsContext);
    const [actionSheet, setShowActionSheet] = useState(false);
    const [ids, setId] = useState<string>();

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);

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
                        <Link to="/profile">
                            <IonIcon style={{ color: 'white', marginLeft: '10px' }} size='large' icon={personCircleOutline}></IonIcon>
                        </Link>
                    </IonButtons>

                    <IonButtons slot="end">
                        <IonMenuButton />
                    </IonButtons>
                     <IonTitle id='title-toolbar' className='left-lost'>Bosen Jomblo</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                {friendCtx.friends.length !=0 ?
                    friendCtx.friends.map(friend =>(
                        <IonItemSliding key={friend.id}>
                            <IonItemOptions  side="end">
                                <IonItemOption onClick={() => actionSheetHandler(friend.id)} color="danger">
                                <IonIcon className="heartIcon" icon={closeOutline} slot="icon-only" />
                                </IonItemOption>
                                    {ids &&
                                        <IonActionSheet isOpen={actionSheet} onDidDismiss={() => setShowActionSheet(false)}
                                            header="Yakin gak gebet dia lagi ?"
                                            buttons={[{
                                                icon: trash,
                                                text: "Yakin, hapus dari daftar",
                                                handler: () => deleteFriend(ids)
                                            },
                                            {   
                                                text: "Gak yakin, kembali",
                                                icon: arrowBackCircleOutline, }
                                            ]} />
                                    }

                            </IonItemOptions>
                            <IonItem>
                                <IonCol size='4'><img className='circle' src={friend.image} alt="" /></IonCol>
                                <IonCol size='8' id='ion-col'>{friend.nama} <br /><br />{friend.keterangan} <br />{friend.gender == 'Female' ? <IonIcon icon={femaleOutline}/> : <IonIcon icon={maleOutline}/>} {friend.gender}</IonCol>
                            </IonItem>
                        </IonItemSliding>
                    )) 
                    
                    : 
                    <IonGrid>
                        <IonRow className="centerTarget">
                            <h2>Anda belum punya gebetan</h2>
                        </IonRow>
                        <IonRow className="centerTarget">
                            <IonButton routerLink="/daftargebet">
                                Cari Gebetan
                            </IonButton>
                        </IonRow>
                    </IonGrid>
                }
            </IonContent>
        </IonPage>
    )
};

export default TargetGebet;