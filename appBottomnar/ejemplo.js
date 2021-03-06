import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import movRoute from './components/movRoute';

const sesionRoute = () => <Text>Iniciar Sesión</Text>;

// const movRoute = () => {
//   return(
//     <SafeAreaView>
//       <Text>Movimientos</Text>
//     </SafeAreaView>
//   );
// }

const repRoute = () => <Text>Informes</Text>;

const transRoute = () => <Text>Transferir Dinero</Text>;

const provRoute = () => <Text>Proveedores</Text>;

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'sesion', title: 'Iniciar Sesión', icon: 'queue-music' },
    { key: 'movs', title: 'Movimientos', icon: 'shopping-cart'},
    { key: 'report', title: 'Informes', icon: 'history' },
    { key: 'transf', title: 'Transferir', icon: 'history' },
    { key: 'provs', title: 'Proveedores', icon: 'queue-music' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    sesion: sesionRoute,
    movs: movRoute,
    report: repRoute,
    transf:transRoute,
    provs:provRoute
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default App;
---------- movRoute.js
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';

const movRoute = () => {
  return(
    <SafeAreaView>
      <Text>Movimientos</Text>
    </SafeAreaView>
  );
}
export default movRoute;

/*
npm install @react-navigation/native
npm install react-native-paper
npm i @react-navigation/stack
npm i react-native-gesture-handler
npm i react-native-screens


https://oblador.github.io/react-native-vector-icons/
*/