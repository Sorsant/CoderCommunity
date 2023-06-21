// reducers.ts
import { GET_ALL_POST, FILTER_AZ, FILTER_ZA, ADD_POST, FILTER_PUBLICATIONS, SEARCH } from './action-types';

const initialState = {
    posts: [],
    addPost: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_POST:
            return {
                ...state,
                posts: payload,
            };

        case FILTER_AZ: {
            return {
                ...state,
                posts: payload,
            };
        }
        case FILTER_ZA: {
            return {
                ...state,
                posts: payload
            }
        }
        case ADD_POST: {
            return {
                ...state,
            };
        }
        case FILTER_PUBLICATIONS: {
            const sortedPosts = [...state.posts];

            if (payload === "news") {
                sortedPosts.sort((a, b) => {
                    const dateA = new Date(a.created);
                    const dateB = new Date(b.created);
                    return dateB - dateA;
                });
            }

            if (payload === "old") {
                sortedPosts.sort((a, b) => {
                    const dateA = new Date(a.created);
                    const dateB = new Date(b.created);

                    return dateA - dateB;
                });
            }

            return {
                ...state,
                posts: sortedPosts,
            };
        }
        case SEARCH: {
            return {
                ...state,
                posts: payload
            }
        }
        default:
            return state;
    }
};

export default reducer