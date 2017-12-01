/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import DashBoard from './components/mydashboard/DashBoard.js';
import LCDrawer from './components/drawer/LCDrawer.js';
import AddItemDummy from './components/AddItemDummy.js';
import ViewItemDummy from './components/ViewItemDummy.js';

import Login from './components/user/Login.js';
import Register from './components/user/Register.js';
import ResetPassword from './components/user/ResetPassword.js';


export function registerScreens(store, Provider) {
	Navigation.registerComponent('LC.LCDrawer', () => LCDrawer, store, Provider);
	Navigation.registerComponent('LC.DashBoard', () => DashBoard, store, Provider);
	Navigation.registerComponent('ZIG.AddItemDummy', () => AddItemDummy);
	Navigation.registerComponent('ZIG.ViewItemDummy', () => ViewItemDummy);
	Navigation.registerComponent('LC.Login', () => Login, store, Provider);
	Navigation.registerComponent('LC.Register', () => Register, store, Provider);
	Navigation.registerComponent('LC.ResetPassword', () => ResetPassword);
}
