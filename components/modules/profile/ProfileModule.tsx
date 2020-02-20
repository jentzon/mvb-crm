// LIBS AND CSS
import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// DATA
import { connect } from 'react-redux';
import { getProfileOverviewData } from '../../../data/redux/overview/selectors';
import { setProfileOverviewData } from '../../../data/redux/overview/actionCreator';
import { fetchProfileOverview } from '../../../data/calls/overviewCalls';
import { fetchProfileListOfColleagues } from '../../../data/calls/profileCalls';

// COMPONENTS
import LoadingSpinner from '@components/functional/moduleLoadingSpinner/ModuleLoadingSpinner';
import ListPerson from '@components/functional/listComponents/peopleListComponent';

// ASSETS
const exampleProfileSrc = '/exampleProfile.jpg';

const ProfileModule = ({ rxModuleData, setData }) => {
    // Destructure modalData
    const { profile, colleaguesList, loaded } = rxModuleData;

    async function fetchData() {
        try {
            const { data: profileResult } = await fetchProfileOverview();
            const { data: colleaguesListResult } = await fetchProfileListOfColleagues();
            setData({ profile: profileResult, colleaguesList: colleaguesListResult });
        } catch (e) {
            // Error.
        }
    }

    useEffect(() => {
        if (!loaded) {
            fetchData();
        }
    });

    return (
        <div>
            <h3 className={classNames('moduleHeader')}>Socialt</h3>
            <div className={classNames('Module ProfileModule')}>
                {!loaded && (
                    <>
                        <LoadingSpinner />
                        <h3 className={classNames('loadingText')}>Loading profile info...</h3>
                    </>
                )}
                {loaded && (
                    <div className={classNames('profileModuleContent')}>
                        <div className={classNames('profileInfoContent')}>
                            <img alt="" className={classNames('profileImage')} src={exampleProfileSrc} />
                            <div className={classNames('profileInfoTextContainer')}>
                                <h3>
                                    {profile.firstName} {profile.lastName}
                                </h3>
                                <h5>{profile.officeRegion}</h5>
                                <h5>{profile.mail}</h5>
                                <br />
                                <h5>{profile.title}</h5>
                                <h5 style={{ color: profile.status === 'Online' ? 'rgba(121,167,66)' : 'red' }}>
                                    {profile.status}
                                </h5>
                            </div>
                        </div>
                        <div className={classNames('colleaguesInfoContent')}>
                            <div className={classNames('peopleList')}>
                                {colleaguesList &&
                                    colleaguesList.map(person => <ListPerson key={person.name} person={person} />)}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    rxModuleData: getProfileOverviewData(state),
});

const mapDispatchToProps = dispatch => ({
    setData: data => dispatch(setProfileOverviewData(data)),
});

ProfileModule.propTypes = {
    rxModuleData: PropTypes.shape({
        profile: PropTypes.any,
        colleaguesList: PropTypes.any,
        loaded: PropTypes.bool.isRequired,
    }).isRequired,
    setData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModule);
