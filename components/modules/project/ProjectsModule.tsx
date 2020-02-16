import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// DATA
import { connect } from 'react-redux';
import { getProjectsOverviewData } from '../../../data/redux/selectors';
import { setProjectsOverviewData } from '../../../data/redux/actions';
import { fetchProjectOverview } from '../../../data/calls/overviewCalls';

import LoadingSpinner from '@components/functional/moduleLoadingSpinner/ModuleLoadingSpinner';

const ProjectModule = ({ rxModuleData, setData }) => {
    // Destructure modalData
    const { loaded } = rxModuleData;

    async function fetchData() {
        try {
            const { data: projectsData } = await fetchProjectOverview();
            setData(projectsData);
        } catch (e) {
            // Error
        }
    }

    useEffect(() => {
        if (!loaded) {
            fetchData();
        }
    });

    return (
        <div>
            <h3 style={{ marginLeft: 8 }}>Projektbevakning</h3>
            <div className="Module ProjectModule">
                {!loaded && (
                    <>
                        {' '}
                        <LoadingSpinner />
                        <h3 className="loadingText">Loading project info...</h3>
                    </>
                )}
                {loaded && <h3 style={{ textAlign: 'center' }}>We are building the projects overview module...</h3>}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    rxModuleData: getProjectsOverviewData(state),
});

const mapDispatchToProps = dispatch => ({
    setData: data => dispatch(setProjectsOverviewData(data)),
});

ProjectModule.propTypes = {
    rxModuleData: PropTypes.shape({
        test: PropTypes.any,
        loaded: PropTypes.bool.isRequired,
    }).isRequired,
    setData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModule);
