import {STATUS} from "./constants";

const WILL_GET_ITEM_COUNT = 10;


export const DATA = new Array(500).fill(1).map((item, index) => ({
    text: `${index + 1}`,
    id: index,
}))

export function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function sleep() {
    await timeout(1000);
}

export const fetchData = async ({
                                    lastIndex,
                                }) => {
    await sleep()
    if (lastIndex + WILL_GET_ITEM_COUNT > DATA.length) {
        return {
            data: DATA,
            status: STATUS.REACHED_DATA_LIMIT,
        }
    }
    return {
        data: DATA.slice(lastIndex, lastIndex + WILL_GET_ITEM_COUNT),
        status: STATUS.SUCCESS,
    }
}
