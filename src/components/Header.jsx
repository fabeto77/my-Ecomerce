import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons';
import { currentFont } from '../global/fonts';

const Header = ({ title, navigation }) => {
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
    }
})