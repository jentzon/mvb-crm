// Module for rendering the most important economy related happenings for user

import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// DATA
import { connect } from 'react-redux';
import { getEconomyOverviewData } from '../../../data/redux/overview/selectors';
import { setEconomyOverviewData } from '../../../data/redux/overview/actionCreator';
import { fetchEconomyOverview } from '../../../data/calls/overviewCalls';

// COMPONENTS
import Graph from '../../../components/functional/graphs/ProjectEconomyGraph';

// Dummy data
import { dataIn, dataOut } from './dummyGraphData';

import LoadingSpinner from '../../../components/functional/moduleLoadingSpinner/ModuleLoadingSpinner';

const nextIcon = <img alt="" src="/arrow_icon.png" style={{ width: '20%' }} />;
const prevIcon = <img alt="" src="/arrow_icon.png" style={{ width: '20%', transform: 'rotate(180deg)' }} />;

const EconomyModule = ({ rxModuleData, setData }) => {
    // Destructure modalData
    const { loaded } = rxModuleData;

    async function fetchData() {
        try {
            const { data: economyReponse } = await fetchEconomyOverview();
            setData(economyReponse);
        } catch (e) {
            // Error
        }
    }

    useEffect(() => {
        if (!loaded) {
            fetchData();
        }
    });

    // TODO: Hidden Courosel item hinders the flexible width on Graph component. Find solution.
    const EconomyGraph = () => <Graph dataIn={dataIn} dataOut={dataOut} />;

    return (
        <div>
            <h3 style={{ marginLeft: 8 }}>Ekonomibevakning</h3>
            <div className={classNames('Module', 'EconomyModule')}>
                {!loaded && (
                    <>
                        <LoadingSpinner />
                        <h3 className={classNames('loadingText')}>Loading economy info...</h3>
                    </>
                )}
                {loaded && (
                    <Carousel
                        interval={null}
                        className={classNames('carousel')}
                        nextIcon={nextIcon}
                        prevIcon={prevIcon}
                    >
                        <Carousel.Item>
                            <div className={classNames('carouselItem')}>
                                <EconomyGraph />
                                <h3 style={{ textAlign: 'center' }}>Småskolan Göteborg</h3>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div
                                style={{
                                    height: 280,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <LoadingSpinner />
                                <h3 style={{ textAlign: 'center' }}>Loading data for Stenhögen Radhus...</h3>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div
                                style={{
                                    height: 280,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <LoadingSpinner />
                                <h3 style={{ textAlign: 'center' }}>Loading data for Vallens Förskola...</h3>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    rxModuleData: getEconomyOverviewData(state),
});

const mapDispatchToProps = dispatch => ({
    setData: data => dispatch(setEconomyOverviewData(data)),
});

EconomyModule.propTypes = {
    rxModuleData: PropTypes.shape({
        test: PropTypes.any,
        loaded: PropTypes.bool.isRequired,
    }).isRequired,
    setData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EconomyModule);
