import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { useRouter } from 'next/router';

const NavBarBox = ({ page }) => {
    const path = useRouter().asPath;
    let isSelected = path === page.path;

    useEffect(() => {
        document.title = `MVB CRM - ${page.title}`;
    });

    // Force selected if root page when on root path
    if (path === '/' && page.isRootPage) isSelected = true;

    return (
        <Link href={page.path} as={page.path}>
            <div className={isSelected ? 'navBarBoxSelected' : 'navBarBox'}>
                <div className="contentWrapper">
                    <h3 className={isSelected ? 'navBarBoxSelectedTitle' : 'navBarBoxTitle'}>{page.title}</h3>
                    <img className={isSelected ? 'arrowImgSelected' : 'arrowImg'} src="/arrow_icon.png" alt="" />
                </div>
            </div>
        </Link>
    );
};

NavBarBox.propTypes = {
    // TODO: Find correct propType for a react component.
    // eslint-disable-next-line react/forbid-prop-types
    page: PropTypes.any.isRequired,
};

export default NavBarBox;
