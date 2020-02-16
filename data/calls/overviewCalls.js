import profileData from '../../public/exampleData/exampleProfile';
import projectsData from '../../public/exampleData/exampleProjects';
import monitoringData from '../../public/exampleData/exampleMonitoringProjects';

export const fetchProfileOverview = profileId =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: profileData, requestedId: profileId });
        }, 900);
    });

export const fetchEconomyOverview = profileId =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: 'test', requestedId: profileId });
        }, 1100);
    });

export const fetchMonitoringOverview = () =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: monitoringData });
        }, 2100);
    });

export const fetchProjectOverview = profileId =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve({ data: projectsData, requestedId: profileId });
        }, 700);
    });
