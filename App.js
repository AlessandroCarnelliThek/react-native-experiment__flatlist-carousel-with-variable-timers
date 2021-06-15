/*NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN#
mMMMMMMMMMMMMMMMMMmhysoooossydNMMMMMMMMMMMMMMMMMMm
mMMMMMMMMMMMMNy+-   `.----.`   `:ohMMMMMMMMMMMMMMm
mMMMMMMMMMNs-  .+ydNMMMMMMMMMmhs/` `:yMMMMMMMMMMMm
mMMMMMMMm/  -smNMMMMMMMMMMMMMMMMMmdo. `oNMMMMMMMMm
mMMMMMN+  /dd+``hMMMMMMMMMMMMMMM+ .sNy- `sMMMMMMMm
mMMMMd. -dm:     sMMMMMMMMMMMMN:    `oNy` :NMMMMMm
mMMMh  /Ms        +MMMMMMMMMMN-       .dm. .mMMMMm
mMMd  +M+          :NMMMMMMMm.          yN. .NMMMm
mMM. -Ms            -NMMMMMh`            dm  +MMMm
mMy  hN`            /mmyyhNh-            :M/ `NMMm
mM+  My            sN:     oM:            Nh  hMMm
mM: .MdooooooooooooMy       NmooooooooooooNd  yMMm
mM+  MMMMMMMMMMMMMMMN:     oMMMMMMMMMMMMMMMh  hMMm
mMh  hMMMMMMMMMMMMMMMNmyyhmMMMMMMMMMMMMMMMM/ `NMMm
mMM. -MMMMMMMMMMMMMMd` ..` -NMMMMMMMMMMMMMm  +MMMm
mMMd  +MMMMMMMMMMMMy        .mMMMMMMMMMMMN. .NMMMm
mMMMh  /MMMMMMMMMMs          `dMMMMMMMMMm. .mMMMMm
mMMMMd. -dMMMMMMM+            `hMMMMMMMy` :NMMMMMm
mMMMMMN+  /dMMMN:               sMMMMy- `sMMMMMMMm
mMMMMMMMm/  -sNmo:`           ./sMdo. `oNMMMMMMMMm
mMMMMMMMMMNs-  .+ydmdhyysyyhmmhs/` `:yMMMMMMMMMMMm
mMMMMMMMMMMMMNy+-`  `.----.`   `:ohMMMMMMMMMMMMMMm
#MMMMMMMMMMMMMMMMMmdysoooossydNMMMMMMMMMMMMMMMMMM#       

                                                  
           ````      ```````     ```````          
          hMMMm`    .MMMMMMMNh:  +MMMMMMMNy.      
         oMMdMMy    .MMM-`.+MMM- +MMm``.hMMm      
        :MMd dMM/   .MMM-`.oMMN` +MMm``-hMMh      
       `NMM+:+MMN.  .MMMMMMMms.  +MMMMMMMdo`      
       hMMmmmmmMMm` .MMM-``      +MMm```          
      oMMh     hMMy .MMM.        +MMd             
      ```       ```  ```         ````             
______________________________________________________________________

  REACT-NATIVE-EXPERIMENT: ' FLATLIST CAROUSEL WITH VARIABLE TIMERS '
______________________________________________________________________

  #_TODO - description:







______________________________________________________________________

 
  look at my works and follow me: 
    https://github.com/AlessandroCarnelliThek

--------------------------------------------------------------------*/

import React from 'react';
//-----------------------------
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//-----------------------------
import { HomeScreen } from './screens/homeScreen'
import { ActionScreen } from './screens/actionScreen'
//-----------------------------
const Stack = createStackNavigator();
//-----------------------------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        headerMode='none' >


        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Action' component={ActionScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

