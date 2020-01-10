import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/Welcome';
import HotelListScreen from '../screens/HotelList';
import HotelDetailScreen from '../screens/HotelDetail';
import { appMainColor } from '../const';

const MainNavigator = StackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null
      }
    },
    HotelListScreen: {
      screen: HotelListScreen,
      navigationOptions: {
        headerTintColor: '#fff',
        title: 'Lista de hoteles',
        headerStyle: {
          backgroundColor: appMainColor
        }
      }
    },
    HotelDetailScreen: {
      screen: HotelDetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.name.toUpperCase(),
        headerStyle: {
          backgroundColor: appMainColor
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff'
        }
      })
    }
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
);

export default MainNavigator;
