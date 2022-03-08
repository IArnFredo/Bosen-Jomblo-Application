import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
import React from "react";
import { Link } from "react-router-dom";

import './Profile.css';

const Profile: React.FC = () => {
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
            <IonContent id="profile-content">
            <aside className="profile-card">

                <header>
                    <img src="/assets/images/profile.jpg"/>
                    <p>PRESS ME</p>
                    <h1>Julius Alfredo</h1>
                    <h2>- 00000036372 -</h2>
                </header>

                <div className="profile-bio">

                    <p>Hello there!</p>
                    <p>I am a full stack web developer. I mainly work with PHP, HTML, CSS, JS and TS.
                        <br />I also play well with Photoshop, Corel Draw, After Effects and other cool stuff.</p>

                </div>
                <ul className="profile-social-links">
                    <li>
                        <a href="https://www.instagram.com/alfred_oj/" target='_blank'>
                            <img src="https://www.svgrepo.com/show/134478/instagram.svg" />
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/IArnFredo" target='_blank'>
                            <img src="https://www.svgrepo.com/show/35001/github.svg" />
                        </a>
                    </li>

                    <li>
                        <a href="https://steamcommunity.com/id/AdlerNac/" target='_blank'>
                            <img src="https://www.svgrepo.com/show/342255/steam.svg" />
                        </a>
                    </li>

                </ul>

            </aside>
            </IonContent>
            
        </IonPage>
    );
};

export default Profile;