import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// DATA
import { connect } from 'react-redux';
import { fetchMonitoringOverview } from '../../../data/calls/overviewCalls';
import { getMonitoringOverviewData } from '../../../data/redux/selectors';
import { setMonitoringOverviewData } from '../../../data/redux/actions';

// COMPONENTS
import LoadingSpinner from '../../../components/functional/moduleLoadingSpinner/ModuleLoadingSpinner';
import ListItem from '../../../components/functional/listComponents/monitoringProjectListComponent';

// UTILS
import { getIconType } from '../../../helpers/icons';

const MonitoringModule = ({ rxModuleData, setModuleData }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const { projectList, loaded } = rxModuleData;

    async function fetchData() {
        try {
            const { data: projectListResult } = await fetchMonitoringOverview();
            setModuleData({ projectList: projectListResult });
        } catch (e) {
            // Error.
        }
    }

    useEffect(() => {
        if (!loaded) {
            fetchData();
        }
    });

    const onItemClick = item => {
        setSelectedItem(item);
    };

    const focusItem = selectedItem || (projectList && projectList[0]) || {};

    const Icon = focusItem && focusItem.types ? getIconType(focusItem.types) : getIconType([]);

    return (
        <div>
            <h3 style={{ marginLeft: 8 }}>Omvärldesbevakning</h3>
            <div className="Module MonitoringModule">
                {!loaded && (
                    <>
                        <LoadingSpinner />
                        <h3 className="loadingText">Loading monitoring info...</h3>
                    </>
                )}
                {loaded && (
                    <div className={classNames('monitoringModuleContent')}>
                        <div className={classNames('monitoringInfoContent')}>
                            <Icon size={60} />
                            <div className={classNames('monitoringInfoTextContainer')}>
                                <h4>{focusItem.name}</h4>
                                <br />
                                <h5>{focusItem.location}</h5>
                                <h5>{focusItem.contract}</h5>
                                <h5>
                                    {focusItem.startTime &&
                                        `
                  ${focusItem.startTime.getFullYear()}-${focusItem.startTime.getMonth() + 1}
                  `}
                                </h5>
                                <br />
                                <h5>{focusItem.constructionMonths} månader byggtid</h5>
                            </div>
                        </div>
                        <div className={classNames('monitoringListInfoContent')}>
                            <div className={classNames('monitoringList')}>
                                {projectList &&
                                    projectList.map(project => (
                                        <ListItem
                                            key={project.name}
                                            project={project}
                                            onItemPress={onItemClick}
                                            selectedId={focusItem.id}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    rxModuleData: getMonitoringOverviewData(state),
});

const mapDispatchToProps = dispatch => ({
    setModuleData: data => dispatch(setMonitoringOverviewData(data)),
});

MonitoringModule.propTypes = {
    rxModuleData: PropTypes.shape({
        projectList: PropTypes.arrayOf(PropTypes.any),
        loaded: PropTypes.bool.isRequired,
    }).isRequired,
    setModuleData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MonitoringModule);
