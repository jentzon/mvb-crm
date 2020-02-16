import React from 'react';
import PageLoadingSpinner from '@components/functional/pageLoadingSpinner/PageLoadingSpinner';

const Monitoring: React.SFC = () => (
    <div className="Page">
        <PageLoadingSpinner size={50} />
        <h5>Loading page...</h5>
    </div>
);

export default Monitoring;
