import React from 'react';
import { GridLoader } from 'react-spinners';

import PropTypes from 'prop-types';

const PageLoadingSpinner = ({ size }) => <GridLoader size={size} margin={5} />;

PageLoadingSpinner.propTypes = {
    size: PropTypes.number,
};

PageLoadingSpinner.defaultProps = {
    size: 50,
};

export default PageLoadingSpinner;
