import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import TargetGebet from './pages/TargetGebet';
import FriendContextProvider from './pages/ContextProvider';
import Profile from './pages/Profile';


setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <Menu />
        <IonRouterOutlet ionPage id="main">
          <Route path="/" exact={true}>
            <Redirect to="/daftargebet" />
          </Route>
          <FriendContextProvider>
            <Route path="/daftargebet" component={Home} exact={true} />
            <Route path="/target_pasangan" component={TargetGebet} exact={true} />
            <Route path="/profile" component={Profile}/>
          </FriendContextProvider>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

