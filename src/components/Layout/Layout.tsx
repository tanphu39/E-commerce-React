import React from 'react';
import cn from 'classnames';

import styles from "./Layout.module.scss";

interface Props {
    className?: string;
}

const Layout: React.FC<Props> = ({
    children,
    className = "",
}) => {

    const layoutClassName = cn({
        [styles["layout"]]: true,
    });

    return (
        <div className = {layoutClassName}>
            {children}
        </div>
    )
}

export default Layout;
