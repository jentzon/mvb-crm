// Detailed project page.

// Show *starred* projects.
// Show projects near finish.
// Show soon to be started projects.

import React from 'react';

import PageLoadingSpinner from '@components/functional/pageLoadingSpinner/PageLoadingSpinner';

const Project = () => (
    <div className="Page">
        <PageLoadingSpinner size={50} />
        <h5>Loading page...</h5>
    </div>
);

export default Project;
