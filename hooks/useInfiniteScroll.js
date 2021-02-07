import {useEffect, useState} from "react";
import {fetchData} from "../helpers";
import {STATUS} from "../constants";

export const useInfiniteScroll = () => {
    const [isFetching, setIsFetching] = useState(true)
    const [reachedDataLimit, setReachedDataLimit] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        if (!isFetching || reachedDataLimit) return

        const loadMoreData = async () => {
            const lastIndex = data.length

            const {
                data: newData,
                status,
            } = await fetchData({lastIndex})

            if (status === STATUS.REACHED_DATA_LIMIT) {
                setReachedDataLimit(true)
                return
            }

            setData(prevState => [...prevState, ...newData])
            setIsFetching(false)
        }

        loadMoreData()

        return () => true
    }, [isFetching])

    return [data, isFetching, setIsFetching]
}
