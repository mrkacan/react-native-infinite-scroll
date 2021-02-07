import React from "react";
import {Text, View} from "react-native";
import styles from './styles'

const ItemCount = React.memo(({count}) => {
    return <View style={styles.dataStateBoxWrapper}>
        <Text style={styles.dataStateText}>
            {count}
        </Text>
    </View>
})

export default ItemCount;
