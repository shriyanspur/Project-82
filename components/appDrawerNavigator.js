import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './appTabNavigator';
import CustomSideBarMenu from './customSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyBartersScreen from '../screens/myBartersScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen: AppTabNavigator},
    MyBarters: {screen: MyBartersScreen},
    Settings : {screen : SettingScreen},
},
    {contentComponent: CustomSideBarMenu},
    {initialRouteName: 'Home'}
)