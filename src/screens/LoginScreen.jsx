import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Input from '../components/Input'
import { colors } from '../global/colors'
import { useLogInMutation } from '../services/authService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { currentFont } from '../global/fonts'
import { insertSession } from '../db'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [triggerLogIn, result] = useLogInMutation()

    const onSubmit = () => {
        //  triggerLogIn({email, password})
        // triggerLogIn({email: "prueba@rafa.com", password:"123456"})
        triggerLogIn({email: "prueba2@rafa.com", password:"123456"})
    }
    const dispatch = useDispatch()

    useEffect(()=>{
        if(result.data){
            dispatch(setUser(result.data))
            insertSession({
              localId: result.data.localId,
              email: result.data.email,
              token: result.data.idToken
          })
          .then(result=>console.log("Se guardo el usuario correctamente: ", result))
          .catch(error=>console.log("Error al guardar el usuario: ", error.message))
        }
    }, [result])

    return (
        <View style={styles.container}>
            <Text style={styles.AppTitle}>
              compraLibre
            </Text>
            <Input
                label="Email:"
                onChange={setEmail}
            />
            <Input
                label="Contraseña:"
                onChange={setPassword}
                isSecureEntry={true}
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Ingresar</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}>
                    <Text style={styles.subtitleLink}>Crear una</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      gap: 10,
    },
    btn: {
      padding: 10,
      backgroundColor: colors.primaryBack,
      borderRadius: 8,
      margin: 5,
  
    },
    btnText: {
      color: "#fff",
      fontFamily: currentFont.bold
    },
    altContainer: {
      flexDirection: 'row',
      gap: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    subtitle: {
      color: "#fff",
      fontFamily: currentFont.bold,
      fontSize: 12,
    },
    subtitleLink: {
      fontFamily: currentFont.italic,
      color: "#fff",
      fontSize: 11,
      textDecorationLine: 'underline'
    },
    AppTitle:{
      color: "#fff",
      fontFamily: currentFont.italic,
      fontSize:60,
      marginBottom: 65
    }
  })