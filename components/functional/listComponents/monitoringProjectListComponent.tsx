import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ToolTip from 'react-tooltip';

import { getIconType } from '../../../helpers/icons';

const MonitoringProjectListComponent = ({ project, selectedId, onItemPress }) => {
    const Icon = getIconType(project.types);
    const isSelected = selectedId === project.id;

    const tooltip = `${project.types}`;

    return (
        <div
            className={classNames('ButtonContainer')}
            onClick={() => onItemPress(project)}
            onKeyPress={() => onItemPress(project)}
            role="button"
            tabIndex={0}
        >
            <div className={classNames('buttonContent')}>
                <div className={classNames('imageContainer')}>
                    <Icon
                        data-for="projectType"
                        data-tip={tooltip}
                        size={48}
                        color={isSelected ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)'}
                    />
                </div>
                <div className={classNames('textInfoContainer')}>
                    <h4>{project.name}</h4>
                    <h5>{project.location}</h5>
                </div>
            </div>
            <ToolTip id="projectType" multiline />
        </div>
    );
};

MonitoringProjectListComponent.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        location: PropTypes.string,
        constructionMonths: PropTypes.number,
        types: PropTypes.arrayOf(PropTypes.string),
        contract: PropTypes.string,
        startTime: PropTypes.any,
    }).isRequired,
    selectedId: PropTypes.string,
    onItemPress: PropTypes.func.isRequired,
};

MonitoringProjectListComponent.defaultProps = {
    selectedId: '',
};

export default MonitoringProjectListComponent;
