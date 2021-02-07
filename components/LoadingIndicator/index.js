import React from "react";
import {ActivityIndicator, View} from "react-native";
import styles from './styles'

const LoadingIndicator = React.memo(({loading}) => {
    if (!loading) {
        return
    }
    return <View style={styles.indicator}>
        <ActivityIndicator color={'#000'} size={'large'}/>
    </View>
})

export default LoadingIndicator;
