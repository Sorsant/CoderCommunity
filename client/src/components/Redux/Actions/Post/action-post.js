import { POST_COMMUNITY } from '../../action-types';

import axios from 'axios';

export const addHomePosts = (post) => {
    return async function (dispatch) {
        const url = await axios.post("https://codecommunity-production.up.railway.app/codec/api/post/", post)
        console.log(url)
        return url
    }
};

export const addCommunity = () => {
    const endpoint = 'https://codecommunity-production.up.railway.app/codec/api/community/';
    return async (dispatch) => {
        const { data } = await axios.post(endpoint);
        return dispatch({
            type: POST_COMMUNITY,
            payload: data
        })
    }
}


