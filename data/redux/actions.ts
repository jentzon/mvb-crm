import {
    SET_ECONOMY_OVERVIEW_DATA,
    SET_MONITORING_OVERVIEW_DATA,
    SET_PROFILE_OVERVIEW_DATA,
    SET_PROJECTS_OVERVIEW,
} from './actionTypes';

export const setEconomyOverviewData = data => ({
    type: SET_ECONOMY_OVERVIEW_DATA,
    payload: {
        data,
    },
});

export const setMonitoringOverviewData = data => ({
    type: SET_MONITORING_OVERVIEW_DATA,
    payload: {
        data,
    },
});

export const setProfileOverviewData = data => ({
    type: SET_PROFILE_OVERVIEW_DATA,
    payload: {
        data,
    },
});

export const setProjectsOverviewData = data => ({
    type: SET_PROJECTS_OVERVIEW,
    payload: {
        data,
    },
});
