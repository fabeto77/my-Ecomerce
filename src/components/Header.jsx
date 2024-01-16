import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';
import { currentFont } from '../global/fonts';
import { useSelector } from 'react-redux';




const Header = ({ title, navigation }) => {

    const image = useSelector(state=>state.authReducer.profilePicture);
    // Perfil

    return (
        <View style={styles.headerContainer}>
            {
                navigation.canGoBack()
                    ?
                    <TouchableOpacity onPress={navigation.goBack}>
                        <AntDesign name="doubleleft" size={25} color="white" />
                    </TouchableOpacity>
                    :
                    <View></View>
            }
            
            <Text style={styles.headerTitle}>{title}</Text>
            <Pressable onPress={()=>navigation.navigate("Perfil")}>
            {

                image
                    ?
                    <Image
                        source={{uri:image}}
                        style={styles.profilePicture}
                        resizeMode='contain'
                        />
                    :
                    <Image
                        source={require('../../assets/img/user.png')}
                        style={styles.profilePicture}
                        resizeMode='contain'
                        />

                    }
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop:30,
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: '#fff',
        fontFamily: currentFont.bold,
        fontSize: 30,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
})