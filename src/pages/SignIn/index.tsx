import React, { useState, useContext } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'

import { AuthContext } from '../../contexts/AuthContext'

export default function SignIn(){
  
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(){

    if(email === '' || password === ''){
        console.log('Credenciais vazias')

      return;
    }

    await signIn({ email, password })
    
  }


  return(
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite seu email"   
          style={styles.input}     
          placeholderTextColor="#101026"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Sua senha"      
          style={styles.input}   
          placeholderTextColor="# 101026"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}          
        />     

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>   
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#ffbb00'
  },
  logo:{
    marginBottom: 18,
    width:'3905%',
    height:'25%',

  },
  inputContainer:{
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14,
  },
  input:{
    width: '95%',
    height: 40,
    backgroundColor: '#FFF',
    marginBottom: 12,
    borderRadius: 4,
    paddingHorizontal: 8,
    color: '#101026'
  },
  button:{
    width: '95%',
    height: 40,
    backgroundColor: '#ff3f4b',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
   fontSize: 18, 
   fontWeight: 'bold',
   color: 'black'
  }
})

// :root{
//     --white: #fff;
//     --black: #000;
//     --bg: #ffbb00;
//     --dark-900:#101026;
//     --dark-700: #1d1d2E;
    
//     --gray-100: #8A8A8A;
//     --green-900: #3fffa3;
//     --red-900: #ff3f4b;
//   }