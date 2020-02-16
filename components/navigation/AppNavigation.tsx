import React from 'react';
import PropTypes from 'prop-types';

import NavigationBarBox from './NavigationBarBox';

const AppWithNavigationBar = ({ pages }) => {
    return (
        <div className="NavigationBar">
            {pages.map(p => (
                <NavigationBarBox key={p.pageName} page={p} />
            ))}
        </div>
    );
};

AppWithNavigationBar.propTypes = {
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            pageName: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default AppWithNavigationBar;
