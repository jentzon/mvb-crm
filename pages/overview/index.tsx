import React from 'react';

import ProfileModule from '@components/modules/profile/ProfileModule';
import ProjectsModule from '@components/modules/project/ProjectsModule';
import MonitoringModule from '@components/modules/monitoring/MonitoringModule';
import EconomyModule from '@components/modules/economy/EconomyModule';

const modules = [
    {
        key: 'profileModule',
        content: ProfileModule,
    },
    {
        key: 'projectModule',
        content: ProjectsModule,
    },
    {
        key: 'monitoringModule',
        content: MonitoringModule,
    },
    {
        key: 'economyModule',
        content: EconomyModule,
    },
];

const Overview = () => (
    <div className="Overview">
        {modules.map(({ key, content: Module }) => (
            <Module key={key} />
        ))}
    </div>
);

export default Overview;
