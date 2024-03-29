import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import user_data from "../data/user_data.json"
import { useDispatch, useSelector } from 'react-redux'
import { currentFont } from '../global/fonts'
import { colors } from '../global/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { setLogOutUser } from '../features/authSlice'
import LocationSelector from '../components/LocationSelector'
import { deleteSession } from '../db'

const ProfileScreen = ({navigation}) => {

    const image = useSelector(state=>state.authReducer.profilePicture);

    const user = useSelector(state=>state.authReducer.user);

    const dispatch = useDispatch();

    const localId = useSelector(state=>state.authReducer.localId)

    const onLogout = () => {
        dispatch(setLogOutUser())
        navigation.navigate("Categories");
        deleteSession(localId)

    }

    const location =  useSelector(state => state.authReducer.location)

    return (
        <>
        <View style={styles.container}>
            <View>
                <Pressable onPress={()=>navigation.navigate("Seleccionar imagen")}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8',
                        },
                        styles.imageContainer,
                    ]}>
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
            <View style={styles.userDataContainer}>
                <Text style={styles.userTitle}>{user}</Text>
                <Text style={styles.userData}>{user_data.role}</Text>
                <Text style={styles.userData}>Nivel: {user_data.level}</Text>
                <Text style={styles.userData}>Direccion: {user_data.address}</Text>
                <Text style={styles.userData}>{user_data.city}</Text>
            </View>

            <View style={styles.cartConfirm}>
                <TouchableOpacity style={styles.confirmButton} onPress={() => {onLogout()}} >
                    <MaterialCommunityIcons name="logout" size={34}/>
                </TouchableOpacity>
            </View>
        </View>
        {
            location &&
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>Última ubicación guardada: </Text>
                <Text style={styles.addressDescription}>{location.address}</Text>     
            </View>
        }
        
        <LocationSelector/>

        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20,
        gap: 20,
        alignItems: 'flex-start',
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    userDataContainer: {
        marginTop: 10,
    },
    userTitle: {
        fontFamily: currentFont.bold,
        fontSize: 20,
        paddingBottom:5 
    },
    imageContainer: {
        borderRadius: 100,
    },
    userData: {
        fontFamily: currentFont.italic,
        fontSize: 15
    },
    cartConfirm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    confirmButton:{
        backgroundColor: colors.danger,
        padding:10,
        borderRadius:10,
        marginTop:20,
        marginLeft: 10
    },
    addressContainer: {
        alignItems: 'center',
        gap: 5,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: colors.primaryBack,
    },
    addressTitle: {
        fontFamily: currentFont.italic,
        fontSize: 14,
        color:"#fff"
    },
    addressDescription: {
        fontFamily: currentFont.italic,
        color:"#fff"
    }
})