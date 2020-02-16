import React from 'react';
import PropTypes from 'prop-types';
import ToolTip from 'react-tooltip';

import {
    FlexibleWidthXYPlot,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalGridLines,
    XAxis,
    YAxis,
} from 'react-vis';

const ProjectEconomyGraph = ({ dataIn, dataOut }) => {
    // Demo. Math functions are not optimized. Math.floor() not to be used eg.
    const totalIn = Math.floor(dataIn.map(({ y }) => y).reduce((a, b) => a + b, 0));
    const totalOut = Math.floor(dataOut.map(({ y }) => y).reduce((a, b) => a + b, 0));
    const sum = totalIn - totalOut;

    const tooltipType = sum > 0 ? 'success' : 'warning';

    const tooltip = `Total in: ${totalIn} Mkr<br/>Total out: ${totalOut} Mkr<br/>Sum: ${sum} Mkr`;

    return (
        <div data-for="graph" data-tip={tooltip}>
            <FlexibleWidthXYPlot
                margin={{
                    left: 110,
                    right: 80,
                    top: 20,
                    bottom: 60,
                }}
                height={250}
                xType="ordinal"
            >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis tickLabelAngle={-45} style={{ text: { fontSize: 10, fontWeight: 600 } }} />
                <YAxis style={{ text: { fontSize: 12, fontWeight: 700 } }} />
                <VerticalBarSeries color="rgba(121 167 66)" data={dataIn} />
                <VerticalBarSeries color="rgba(238 114 14)" data={dataOut} />
            </FlexibleWidthXYPlot>
            <ToolTip id="graph" multiline type={tooltipType} />
        </div>
    );
};

ProjectEconomyGraph.propTypes = {
    // TODO: Don't use .object as propType. Change when format is known.
    // eslint-disable-next-line react/forbid-prop-types
    dataIn: PropTypes.array.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    dataOut: PropTypes.array.isRequired,
};

export default ProjectEconomyGraph;
