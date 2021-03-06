/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// 1st Step
 import { createStackNavigator } from 'react-navigation-stack';
 // authentication views
 import { createSwitchNavigator, createAppContainer } from 'react-navigation';

 import  Dashboard  from "./Script/Dashboard";
 import  DisplayResultScreen  from "./Script/DisplayResultScreen";
 import  RelatedWords  from "./Script/RelatedWords";
 import  ReadingScreen  from "./Script/ReadingScreen";

 import  ReadingComponentFromBooks from "./Script/ReadingComponentFromBooks";
 import  Tasaneef  from "./Script/Tasaneef";
 import  DescriptionScreen  from "./Script/DescriptionScreen";
 import  SideMenu  from "./Script/SideMenu";
 import  Tibbikutab  from "./Script/Tibbikutab";
 import  ForumScreen  from "./Script/ForumScreen";
 import  Tibbikutabdetail from "./Script/Tibbikutabdetail";
 import  BookContents  from "./Script/BookContents";
 import  BooksChapters  from "./Script/BooksChapters";
 import  BooksScreen  from "./Script/BooksScreen";
 import  ChaptersListScreen  from "./Script/ChaptersListScreen";
 import  ChaptersListComponent  from "./Script/ChaptersListComponent";
 import  ChaptersListDetailComponent  from "./Script/ChaptersListDetailComponent";
 // import  DialerScreen  from "./Script/DialerScreen";
 import  IndexScreen  from "./Script/IndexScreen";
 import  IntroductionScreen  from "./Script/IntroductionScreen";
 import  IntroductionScreen2  from "./Script/IntroductionScreen2";

 const AuthNavigator = createStackNavigator({
    Dashboard: { screen: Dashboard },
    DisplayResultScreen: { screen: DisplayResultScreen },
    RelatedWords: { screen: RelatedWords },
    ReadingScreen: { screen: ReadingScreen },
    ReadingComponentFromBooks: { screen: ReadingComponentFromBooks },
    Tasaneef: { screen: Tasaneef },
    DescriptionScreen: { screen: DescriptionScreen },
    SideMenu: { screen: SideMenu },
    Tibbikutab: { screen: Tibbikutab },
    ForumScreen: { screen: ForumScreen },
    Tibbikutabdetail: { screen: Tibbikutabdetail },
    BookContents: { screen: BookContents },
    BooksChapters: { screen: BooksChapters },
    BooksScreen: { screen: BooksScreen },
    ChaptersListScreen: { screen: ChaptersListScreen },
    ChaptersListComponent: { screen: ChaptersListComponent },
    ChaptersListDetailComponent: { screen: ChaptersListDetailComponent },
    // DialerScreen: { screen: DialerScreen },
    IndexScreen: { screen: IndexScreen },
    IntroductionScreen: { screen: IntroductionScreen },
    IntroductionScreen2: { screen: IntroductionScreen2 },
   },
   {
     headerMode: 'none'
   }
 );

 const App = createAppContainer(AuthNavigator);

 export default App;


 // Other Code, Including Drawer and Tabbar etc is written below

 // import React,{ Component } from 'react';
 //
 // import {
 //   SafeAreaView,
 //   StyleSheet,
 //   ScrollView,
 //   View,
 //   Text,
 //   StatusBar,
 //   Image,
 //   Alert,
 // } from 'react-native';
 //
 // import {
 //   Header,
 //   LearnMoreLinks,
 //   Colors,
 //   DebugInstructions,
 //   ReloadInstructions,
 // } from 'react-native/Libraries/NewAppScreen';
 //
 // import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 //
 // // 1st Step
 // import { createStackNavigator } from 'react-navigation-stack'
 // // authentication views
 //
 // import Login from './Login';
 // import Register from './Register';
 //
 // // 2nd Step
 // // packages
 // import { createDrawerNavigator } from 'react-navigation-drawer';
 // // views
 // import Home1 from './Home1';
 // import Home2 from './Home2';
 // import HomeViewController from './HomeViewController';
 // import DetailViewController from './DetailViewController';
 // import Profile from './Profile';
 //
 // import Menu from './Menu';
 // import SideMenu from './SideMenu';
 //
 // import { createSwitchNavigator, createAppContainer } from 'react-navigation';
 //
 // const AuthNavigator = createStackNavigator({
 //     HomeViewController: { screen: HomeViewController },
 //     DetailViewController: { screen: DetailViewController }
 //   },
 //   {
 //     headerMode: 'none'
 //   }
 // );
 //
 // // create the navigators
 // const HomeStackNavigator = createStackNavigator({
 //   Home1: { screen: Home1 },
 //   Home2: { screen: Home2 }
 // });
 //
 // const CalendarStackNavigator = createStackNavigator({
 //   Home3: { screen: Home3 },
 //   Home4: { screen: Home4 }
 // });
 //
 // // create and configure drawer parent navigator for main app
 // const AppNavigator = createDrawerNavigator({
 //   Home: { screen: HomeStackNavigator },
 //   Calendar: { screen: CalendarStackNavigator },
 //   Profile: { screen: Profile },
 // }, {
 //   contentComponent: SideMenu,
 //   drawerWidth: wp('75%'),
 //   initialRouteName: 'Calendar'
 // });
 //
 // // create switch navigation with authentication flow and main app
 // const SwitchNavigator = createSwitchNavigator(
 //   {
 //     Login: AuthNavigator,
 //     App: AppNavigator
 //   },
 //   {
 //     initialRouteName: 'Login'
 //   }
 // );
 //
 // // const App = () => (
 // //   <SwitchNavigator />
 // // );
 //
 // //const App = createAppContainer(AuthNavigator);
 // // const App = createAppContainer(AppNavigator);
 //
 // const App = createAppContainer(AuthNavigator);
 //
 // export default App;













 // class App extends Component{
 //
 //   render(){
 //
 //     return(
 //        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'green'}}>
 //           <Image source={require('./Icons/logosplash.png')} style={{width:150,height:156}}>
 //           </Image>
 //         </View>
 //           );
 //         }
 //
 // }
 //
 // export default App;
