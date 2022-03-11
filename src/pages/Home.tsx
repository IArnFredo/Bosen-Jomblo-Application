import { IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLoading, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import './Home.css';
import { femaleOutline, heart, maleOutline, personCircleOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import FriendsContext from './FriendsContext';

const shuffle = (List: { id: string; name: string; keterangan: string; gender: string; image: string; }[]) => [...List].sort(() => Math.random() - 0.5);

export const List = [
  { id: '1', name: 'Kaguya Shinomiya', keterangan: "How Cute.", gender: "Female", image: "https://pbs.twimg.com/profile_images/1345270755089477633/Pev-TYba_400x400.jpg" }
  , { id: '2', name: 'Rias Gremory', keterangan: "I am a Devil.", gender: "Female", image: "https://cdn.anime-planet.com/characters/primary/rias-gremory-1.jpg?t=1625812966" }
  , { id: '3', name: 'Orihime Inoue', keterangan: "Bind Two Hearts.", gender: "Female", image: "https://upload.wikimedia.org/wikipedia/en/9/93/OrihimeAnimeEp139.jpg" }
  , { id: '4', name: 'Yumeko Jabami', keterangan: "Money.", gender: "Female", image: "https://i1.sndcdn.com/avatars-000693503726-5cxo1w-t500x500.jpg" }
  , { id: '5', name: 'Chisa Kotegawa', keterangan: "Swimming.", gender: "Female", image: "https://cdn.anime-planet.com/characters/primary/chisa-kotegawa-1.jpg?t=1625883585" }
  , { id: '6', name: 'Kitagawa Marin', keterangan: "You need to say.", gender: "Female", image: "https://otakotaku.com/asset/img/character/2021/10/marin-kitagawa-61765d6a541cdp.jpg" }
  , { id: '7', name: 'Mikasa Ackerman', keterangan: "..", gender: "Female", image: "https://i.pinimg.com/736x/52/1d/18/521d18dc913e9694ba867f7110319482.jpg"}
  , { id: '8', name: 'Artoria Pendragon', keterangan: "Extravagance is the enemy.", gender: "Female", image:"https://i.pinimg.com/736x/9f/a1/ed/9fa1ed8b179d3a7aac98377d35e5373e.jpg"}
  , { id: '9', name: 'Akame', keterangan: "Shouldn't be fighting.", gender: "Female", image:"https://qph.fs.quoracdn.net/main-qimg-875219bb80475290e92bbae685a8538d-lq"}
  , { id: '10', name: 'Inori Yuzuhira', keterangan:"Believe. You can do it.", gender:"Female", image:"https://a-static.besthdwallpaper.com/inori-yuzuriha-wallpaper-3840x2160-30471_54.jpg"}
  , { id: '11', name: 'Yuuki Asuna', keterangan:"Whatever.", gender:"Female", image:"https://stealthoptional.com/wp-content/uploads/2021/10/Asuna-Yuuki.jpg"}
]

const randomShuffleList = shuffle(List);


const Home: React.FC = () => {

  const friendCtx = useContext(FriendsContext);
  let exist: any[] = [];
  const [showLoad, setShowLoading] = useState(false)
  friendCtx.friends.map(target => exist.push(target.id))
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const addFriend = (id: string, nama: string, keterangan: string, gender: string, image:string) => {
      slidingOptionsRef.current?.closeOpened();
      friendCtx.addFriend(id, nama, keterangan, gender,image)
      List.forEach((value,index)=>{
        if(value.id===id){
          List.splice(index,1);
        } 
      });
      console.log(List);
      setShowLoading(true)
  }
  setTimeout(() => {
      setShowLoading(false);
  }, 3000)
  
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

      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                {randomShuffleList.slice(0,10).map((item) => (
                  <SwiperSlide key={item.id}>
                    <IonCard id='highlight'>
                      <img className='circle' src={item.image} alt="" />
                      <p id='line-between'></p>
                      <IonCardContent>
                        {item.name}
                      </IonCardContent>
                    </IonCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </IonCol>

          </IonRow>
        </IonGrid>
        <IonGrid>
          {List.map((item) => (
             <IonItemSliding key={item.id} ref={slidingOptionsRef}>
                   <IonItem>
                      <IonCol size='4'><img className='circle' src={item.image} alt="" /></IonCol>
                   <IonCol size='8' id='ion-col'>{item.name} <br /><br />{item.keterangan} <br />{item.gender === 'Female' ? <IonIcon icon={femaleOutline}/> : <IonIcon icon={maleOutline}/>} {item.gender}</IonCol>
                  </IonItem>

                  <IonItemOptions side="end">
                    <IonItemOption color="danger" disabled={exist.indexOf(item.id) > -1} routerLink="/targetgebet" onClick={() => addFriend(item.id, item.name, item.keterangan, item.gender, item.image)}><IonIcon className="heartIcon" icon={heart} slot="icon-only" /></IonItemOption>
                  </IonItemOptions>
                <IonLoading isOpen={showLoad} onDidDismiss={() => setShowLoading(false)} message={'Please wait...'} duration={3000}/>
            </IonItemSliding>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
