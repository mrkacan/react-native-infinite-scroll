import React from "react";
import {Text, View} from "react-native";
import styles from './styles'

const Item = React.memo(({text}) => {
    return <View style={styles.itemWrapper}>
        <Text style={styles.itemText}>
            {text}
        </Text>
    </View>
})

export default Item;
