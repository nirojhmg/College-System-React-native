import Login from './Login'
import Splash from './Splash'
import StudentRegister from './StudentRegister'
import {createStackNavigator, createAppContainer} from 'react-navigation'
const AppNavigator = createStackNavigator({
    //Screens   
    Splash: {
        screen: Splash
    },
    Login: {
        screen: Login
    },
    StudentRegister:{
        screen:StudentRegister
    }
}, {
    //settings
    initialRouteName: 'Splash'
})
export default createAppContainer(AppNavigator)