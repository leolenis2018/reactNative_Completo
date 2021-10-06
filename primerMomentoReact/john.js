
// // 


// import React, {useState} from 'react';
// import { StyleSheet, Text, View, TextInput, Button, Picker} from 'react-native';

// export default function App() {
//   const [valorPrestamo, setValorPrestamo] = useState('');
//   const [valorInteres, setValorInteres] = useState('');
//   const [numeroCuota, setNumeroCuota] = useState('');
//   const [valorCuota, setValorCuota] = useState('');
//   const [totalDeuda, setTotalDeuda] = useState('');
//   const [tipo, setTipo] = useState('');

//   const calcularPrestamo = () => {
//     setTotalDeuda ((parseFloat (valorPrestamo) * parseFloat (valorInteres) /100) * parseFloat(numeroCuota) + parseFloat (valorPrestamo));
//   }
//   const cuotaPrestamo = () => {
//     setValorCuota (parseFloat (totalDeuda) / parseFloat (numeroCuota) );
//   }
//   const calculoYcuota = () => {
//     calcularPrestamo();
//     cuotaPrestamo();
//   }

//   const limpiar = () => {
//     setValorPrestamo = '',
//     set
//   }
  
//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize: 40, color: 'orange'}}>🏛️ Banco JR</Text>
//       <Text> {'\n'}</Text>
//       <Text>Valor del credito</Text>
//       <TextInput 
//         placeholder="Ingrese valor del credito" 
//         style={{backgroundColor:"#DFDFDF", borderBottomWidth:2}}
//         onChangeText={valorPrestamo => setValorPrestamo (valorPrestamo) }
//         value={valorPrestamo}
//       />
//       <Text> {'\n'}</Text>
//       {/* <Text>Tipo de credito:{'\n'}
//         Vivienda: 0.5% {'\n'}
//         Vehiculo: 1,5% {'\n'}
//         Educacion: 0,8% {'\n'}
//         Libre Inversion: 2% {'\n'}
//       </Text> */}
//       <View>
//         <Text></Text>
//         <Text>Seleccione su credito</Text>
//         <Picker
//         selectedValue = {tipo}
//         style = { {height: '35', width: '150', borderColor: 'white'} }
//         onValueChange = { (itemValue, itemIndex) => setTipo(itemValue) }
//         >
//           <Picker.Item label = 'Vivienda' value = 'vi' />
//           <Picker.Item label = 'Vehiculo' value = 'veh' />
//           <Picker.Item label = 'Educación' value = 'edu' />
//           <Picker.Item label = 'Libre inversion' value = 'lb' />
//         </Picker>
//         <Text>
//           Interes: {tipo == 'vi' ? ' valSwitch*520' /*<--se pueden hacer calculos*/: tipo == 'veh' ? '1.5 %': tipo == 'edu' ? '0.8 %' : ' 2 %'} 
//         </Text>
//       </View>

//       <TextInput 
//         placeholder="Tipo de credito" 
//         style={{backgroundColor:"#DFDFDF", borderBottomWidth:2}}
//         onChangeText={valorInteres => setValorInteres (valorInteres) }
//         value={valorInteres}
//       />
//       <Text> {'\n'}</Text>
//       <Text>Numero de cuotas</Text>
//       <TextInput 
//         placeholder="Diferir a cuantas cuotas" 
//         style={{backgroundColor:"#DFDFDF", borderBottomWidth:2}}
//         onChangeText={numeroCuota => setNumeroCuota(numeroCuota)}       
//         value={numeroCuota}       
//       />
//       <Text> {'\n'}</Text>
//       <Text>Valor a pagar</Text>
//       <TextInput 
//         placeholder="" 
//         style={{backgroundColor:"#DFDFDF", borderBottomWidth:2}}
//         value={valorCuota} 
//       />
//       <Text> {'\n'}</Text>
//       <Text>Total deuda</Text>
//       <TextInput placeholder="" 
//          style={{backgroundColor:"#DFDFDF", borderBottomWidth:2}}
//          value={totalDeuda}      
//       />
      
//       <View>
//         <Text>{'\n'}</Text>
//         <Button 
//           title="Calcular"
//           onPress={ calculoYcuota}>
//         </Button>

//         <Text>{'\n'}</Text>
//         <Button title="Limpiar"
//           style={styles.button}
//           onPress={ limpiar }
//           >
//         </Button>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: { margin: 5, backgroundColor: "orange", padding: 5, borderRadius: 5 },
//   text: { fontWeight: "bold", textAlign: "center", color: "brown" },

// });


// 


import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, ImageBackground} from 'react-native';

const mImage = { uri: 'https://previews.123rf.com/images/oatstocker/oatstocker1804/oatstocker180400054/98677747-calculator-notepad-with-pencil-on-wood-board-background-using-wallpaper-for-education-business-photo.jpg'}

export default function App() {
  const [valorPrestamo, setValorPrestamo] = useState('');
  const [numeroCuota, setNumeroCuota] = useState(''); 
  const [valorCuota, setValorCuota] = useState('');
  const [totalDeuda, setTotalDeuda] = useState('');
  const [tipo, setTipo] = useState('');

  const calcularPrestamo = () => {
    if (valorPrestamo >= 4000000 && valorPrestamo <= 10000000 && numeroCuota <= 60 && numeroCuota >=12 ){
      setTotalDeuda ((parseFloat (valorPrestamo) * parseFloat (tipo) /100) * parseFloat(numeroCuota) + parseFloat (valorPrestamo));
      
      setValorCuota (parseFloat (totalDeuda) / parseFloat (numeroCuota) );
    }else{
      alert('El valor debe ser mayor a 4 millones y menor a 10 millones y debe ser mayor de 12 cuotas y menor de 60 cuotas')
    }
    
  }
//   const cuotaPrestamo = () => {
//   }
//   const calculoYcuota = () => {
//     calcularPrestamo();
//     cuotaPrestamo();
//   }

  const limpiar = () => {
    
      setValorPrestamo('');
      setNumeroCuota('');
      setValorCuota('');
      setTotalDeuda('');
  
  }
  

  return (
    <View style={styles.container}>
        <ImageBackground
          source={mImage}
          style={{width: 900, height: 100, borderRadius: 10, resizeMode: 'stretch'}}
          >
        </ImageBackground>
      <Text style={{fontSize: 40, color: 'orange'}}>🏛️ Banco JR</Text>
      <Text> {'\n'}</Text>
      <Text>Valor del credito</Text>
      <TextInput 
        placeholder="Ingrese valor del credito" 
        style={{backgroundColor:"#DFDFDF", borderBottomWidth:2}}
        onChangeText={valorPrestamo => setValorPrestamo (valorPrestamo) }
        value={valorPrestamo}
      />
      <Text> {'\n'}</Text>
      <View>
        <Text>Seleccione su crédito</Text>
        <Picker
        selectedValue = {tipo}
        style = { {height: '35', width: '150', borderColor: 'gray'} }
        onValueChange = { (itemValue, itemIndex) => setTipo(itemValue) }
        >
          <Picker.Item label = '' value = '' />
          <Picker.Item label = 'Vivienda' value = '0.5' />
          <Picker.Item label = 'Vehículo' value = '1.5' />
          <Picker.Item label = 'Educación' value = '0.8' />
          <Picker.Item label = 'Libre inversión' value = '2' />
        </Picker>
        <Text>
           {tipo == '' ? '': tipo == '0.5' ?  0.5 : tipo == '1.5' ? 1.5: tipo == '0.8' ? 0.8 : 2 } 
        </Text>
      </View>

      <Text> {'\n'}</Text>
      <Text>Numero de cuotas</Text>
      <TextInput 
        placeholder="Diferir cuotas" 
        style={{backgroundColor:"#DFDFDF", borderBottomWidth:2}}
        onChangeText={numeroCuota => setNumeroCuota(numeroCuota)}       
        value={numeroCuota}       
      />
      <Text> {'\n'}</Text>
      <Text>Valor de la cuota</Text>
      <TextInput 
        placeholder="" 
        style={{backgroundColor:"#DFDFDF", borderBottomWidth:2}}
        value={valorCuota} 
      />
      <Text> {'\n'}</Text>
      <Text>Total deuda</Text>
      <TextInput placeholder="" 
         style={{backgroundColor:"#DFDFDF", borderBottomWidth:2}}
         value={totalDeuda}      
      />
      
      <View>
        <Text>{'\n'}</Text>
        <Button 
          title="Calcular"
          onPress={() => calculoYcuota() }
          >
        </Button>

        <Text>{'\n'}</Text>
        <Button 
          title="Limpiar"
          onPress={ limpiar }
          >
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { margin: 5, backgroundColor: "orange", padding: 5, borderRadius: 5 },
  text: { fontWeight: "bold", textAlign: "center", color: "brown" },

});
