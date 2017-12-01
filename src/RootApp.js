//import Navigation from 'react-native-navigation';
import { Navigation } from 'react-native-navigation';
//import store from './store';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { registerScreens } from './screens';
import configureStore from './store/configureStore';

const store = configureStore();
//const store = createStore(reducers,
//{ userName: '', authenticated: false, accesstoken: '', appErrorMessage: '' },
//applyMiddleware(ReduxThunk));

export default class RootApp {
  constructor() {
    this.onboardingStarted = false;
    this.rootId = 'login';
    registerScreens(store, Provider);
    this.unsubscribe = store.subscribe(this.onStoreUpdate.bind(this));
    this.startOnboardingApp();
    //registerContainers(store, Provider);
    //  Navigation.events().onAppLaunched(() => {
    //this.unsubscribe = store.subscribe(this.onStoreUpdate.bind(this));
    //});
  }

  onStoreUpdate() {
    let state = store.getState();
    const appState = state.appState;
console.log(state);
console.log(`class root id  ${this.rootId}`);
    // Wait for the redux store to load before starting the app
    if (this.rootId !== appState.rootId) {
      this.startApp(appState.rootId);
      this.rootId = appState.rootId;
    }
  }

  startApp(rootId) {
    //Do something with state
    //i.e. determine if the user has logged in or has completed onboarding and start a different app

    if (rootId === 'login') {
      //Unsubscribe from store updates, as we no longer want to receive them here
    //  this.unsubscribe();
      this.startOnboardingApp();
      console.log(rootId);
    } else if (rootId === 'afterLogin') {
    //  this.onboardingStarted = true;
      this.startDefaultApp();
      console.log(rootId);
    } else {
      console.log(rootId);
    }
  }

  startDefaultApp() {
    console.log("startDefaultApp");
    const navigatorStyle = {
      statusBarColor: 'black',
      statusBarTextColorScheme: 'light',
      navigationBarColor: 'black',
      navBarBackgroundColor: '#0a0a0a',
      navBarTextColor: 'white',
      navBarButtonColor: 'white',
      tabBarButtonColor: 'red',
      tabBarSelectedButtonColor: 'red',
      tabBarBackgroundColor: 'white',
      topBarElevationShadowEnabled: false,
      navBarHideOnScroll: true,
      tabBarHidden: true,
      drawUnderTabBar: true
    };
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'LC.DashBoard',
        title: 'Dashboard',
        navigatorStyle,
        leftButtons: [
          {
            id: 'sideMenu'
          }
        ]
      },
      drawer: {
        left: {
          screen: 'LC.LCDrawer'
        }
      }
    });
  }

  startOnboardingApp() {
      console.log("startOnboardingApp");
    const navigatorStyle = {
      statusBarColor: 'black',
      statusBarTextColorScheme: 'light',
      navigationBarColor: 'black',
      navBarBackgroundColor: '#0a0a0a',
      navBarTextColor: 'white',
      navBarButtonColor: 'white',
      tabBarButtonColor: 'red',
      tabBarSelectedButtonColor: 'red',
      tabBarBackgroundColor: 'white',
      topBarElevationShadowEnabled: false,
      navBarHideOnScroll: true,
      tabBarHidden: true,
      drawUnderTabBar: true
    };

    Navigation.startSingleScreenApp({
    	screen: {
    		screen: 'LC.Login',
    		navigatorStyle: {navBarHidden: true}
    	}
    });


    console.log("finished...");

  /*  Navigation.startSingleScreenApp({
      screen: {
        screen: 'user.Login',
        title: 'Login',
        navigatorStyle
      }
    }); */
  }
}
