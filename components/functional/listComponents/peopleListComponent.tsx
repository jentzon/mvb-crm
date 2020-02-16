import React from 'react';
import classNames from 'classnames';
import { IoLogoIonic } from 'react-icons/io';

import PropTypes from 'prop-types';

const PeopleListComponent = ({ person }) => (
    <div className={classNames('Container')}>
        <div className={classNames('imageWrapper')}>
            <img alt="" src={person.img} className={classNames('image')} />
        </div>
        <div className={classNames('nameWrapper')}>
            <h4>{person.name}</h4>
            <h5>{person.project}</h5>
        </div>

        <div className={classNames('logoWrapper')}>
            <IoLogoIonic color={person.status === 'Online' ? 'rgba(121, 167, 66, 1)' : 'rgba(238, 114, 14, 1)'} />
        </div>
    </div>
);

PeopleListComponent.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string,
        project: PropTypes.string,
        status: PropTypes.string,
        img: PropTypes.any,
    }).isRequired,
};

export default PeopleListComponent;
