import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { heartOutline, heartSharp, mailOutline, mailSharp, moon, paperPlaneOutline, paperPlaneSharp,} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Daftar Calon Pasangan',
    url: '/daftargebet',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Target Pasangan',
    url: '/target_pasangan',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Profile',
    url: '/profile',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
];

const Menu: React.FC = () => {
  const location = useLocation();
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };
  return (
    <IonMenu contentId="main" side='end'type="reveal">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Gebet App </IonListHeader>
          <IonNote style={{color: 'var(--ion-color-grey)'}}>Meet Your Partner Here</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          <IonItem>
              <IonIcon slot="start" icon={moon} className="component-icon component-icon-dark" />
              <IonLabel>Dark Mode</IonLabel>
              <IonToggle value="mushrooms" onIonChange={toggleDarkModeHandler}/>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
