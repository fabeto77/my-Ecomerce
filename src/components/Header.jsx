import {View, Text, StyleSheet} from 'react-native'
import { colors } from '../global/theme'

const Header = ({title}) => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    headerTitle: {
        color: colors.secondary,
        fontFamily: 'DancingScript-Regular',
        fontSize: 40
    }
})