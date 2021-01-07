import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/homeScreen';
import ReceiverDetailsScreen from '../screens/receiverDetailsScreen';


export const AppStackNavigator = createStackNavigator({
  donateList: {
    screen: HomeScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  receiverDetails: {
    screen: ReceiverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {initialRouteName: 'donateList'}
)