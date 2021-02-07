import React from 'react'
import {FlatList, SafeAreaView} from 'react-native'
import {INITIAL_LOAD} from "./config";
import Item from "./components/Item";
import LoadingIndicator from "./components/LoadingIndicator";
import ItemCount from "./components/ItemCount";
import {useInfiniteScroll} from "./hooks/useInfiniteScroll";
import styles from './appStyles'

export default function App() {
    const [data, isFetching, setIsFetching] = useInfiniteScroll()

    return (
        <SafeAreaView style={styles.container}>
            <ItemCount count={data.length}/>
            <LoadingIndicator loading={isFetching}/>
            <FlatList
                data={data}
                keyExtractor={item => `infinite_scroll_item_${item.id}`}
                removeClippedSubviews
                initialNumToRender={INITIAL_LOAD}
                onEndReachedThreshold={0.1}
                onEndReached={() => {
                    if (!isFetching) {
                        setIsFetching(true)
                    }
                }}
                renderItem={({item}) => <Item text={item.text}/>}
            />
        </SafeAreaView>
    )
}
