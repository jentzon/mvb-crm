import {
    SET_ECONOMY_OVERVIEW_DATA,
    SET_MONITORING_OVERVIEW_DATA,
    SET_PROFILE_OVERVIEW_DATA,
    SET_PROJECTS_OVERVIEW,
} from './actionTypes';

const initialState = {
    monitoring: {
        loaded: false,
    },
    profile: {
        loaded: false,
    },
    projects: {
        loaded: false,
    },
    economy: {
        loaded: false,
    },
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_ECONOMY_OVERVIEW_DATA: {
            const { data } = action.payload;
            return {
                ...state,
                economy: { ...data, loaded: true },
            };
        }

        case SET_MONITORING_OVERVIEW_DATA: {
            const { data } = action.payload;
            return {
                ...state,
                monitoring: { ...data, loaded: true },
            };
        }

        case SET_PROFILE_OVERVIEW_DATA: {
            const { data } = action.payload;
            return {
                ...state,
                profile: { ...data, loaded: true },
            };
        }

        case SET_PROJECTS_OVERVIEW: {
            const { data } = action.payload;
            return {
                ...state,
                projects: { ...data, loaded: true },
            };
        }

        default:
            return state;
    }
}
