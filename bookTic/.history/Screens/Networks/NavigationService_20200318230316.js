/* eslint-disable prettier/prettier */
import { NavigationActions} from 'react-navigation';

 let _navigator;

 function setTopLevelNavigator(ref) {
     _navigator = ref 
 }

 function navigate(rootName, params) {
     _navigator.dispatch(
         NavigationActions.navigate({
             rootName,
             params
         }),
     );
 }

 function back() {
     _navigator.dispatch(NavigationActions.back());
 }

 function popToTop(immediate = true) {
   _navigator.dispatch({
       type: NavigationActions.POP_TO_TOP,
       immediate
   }); 
 }

 function reset({actions, index}) {
      _navigator.dispatch({
          type:NavigationActions.RESET,
          index,
          actions
      });
 }

export const NavigationService = {
    navigate,
    setTopLevelNavigator,
    back,
    reset,
    navigator: _navigator
}