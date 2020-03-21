/* eslint-disable prettier/prettier */
import { NavigationActions} from 'react-navigation';

 let _navigator;

 function setTopLevelNavigator(ref) {
     _navigator = ref 
 }

 function navigate(rootName, param) {
     _navigator.dispatch(
         NavigationActions.navigate({
             rootName,
             params
         })
     )
 }