import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    itemText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    itemWrapper: {
        width: '90%',
        backgroundColor: '#f6f6f6',
        height: 150,
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
});

export default styles;
