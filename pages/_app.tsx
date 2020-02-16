import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import PropTypes from 'prop-types';
import initStore from '../data/redux/store';

import AppNavigation from '@components/navigation/AppNavigation';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Global CSS
import './styles.css';

// Components CSS
import '../components/navigation/NavigationBar.styles.css';
import '../components/functional/listComponents/monitoringProjectListComponent.styles.css';
import '../components/functional/listComponents/peopleListComponent.styles.css';
import '../components/modules/ModulesShared.styles.css'; // <--- Module
import '../components/modules/economy/EconomyModule.styles.css'; // <--- Module
import '../components/modules/monitoring/MonitoringModule.styles.css'; // <--- Module
import '../components/modules/profile/ProfileModule.styles.css'; // <--- Module
import '../components/modules/project/ProjectModule.styles.css'; // <--- Module

// Pages CSS
import './Page.styles.css';
import './overview/Overview.styles.css';

const pages = [
    {
        pageName: 'overviewPage',
        path: '/overview',
        title: 'Dashboard',
    },
    {
        pageName: 'economyPage',
        path: '/economy',
        title: 'Economy',
    },
    {
        pageName: 'monitoringPage',
        path: '/monitoring',
        title: 'Monitoring',
    },
    {
        pageName: 'profilePage',
        path: '/profile',
        title: 'Profile',
    },
    {
        pageName: 'projectPage',
        path: '/project',
        title: 'Project',
    },
];

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Application({ Component, pageProps, store }) {
    return (
        <Provider store={store}>
            <AppNavigation pages={pages} />
            <Component {...pageProps} />
        </Provider>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

Application.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
};

Application.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any,
    store: PropTypes.any,
};

export default withRedux(initStore)(Application);
