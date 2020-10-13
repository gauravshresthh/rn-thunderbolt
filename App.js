import { createStackNavigator, createAppContainer } from 'react=native';
import IndexScreen from './src/Screens/IndexScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Thunderbolt',
    },
  }
);

export default createAppContainer(navigator);
