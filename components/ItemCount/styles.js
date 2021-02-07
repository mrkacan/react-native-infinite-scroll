import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dataStateBoxWrapper: {
        width: 45,
        height: 45,
        position: 'absolute',
        backgroundColor: '#ffffff',
        padding: 10,
        right: 25,
        top: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        zIndex: 1
    },
    dataStateText: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold'
    },
});

export default styles;
