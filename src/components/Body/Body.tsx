import React from 'react'
import cn from 'classnames';

import styles from "./Body.module.scss";

interface Props {
    className?: string;
}

const Body: React.FC<Props> = ({
    children,
    className = "",
}) => {
    const bodyClassName = cn({
        [styles["body"]]: true,
    })

    return (
        <div className = {bodyClassName}>
            {children}
        </div>
    )
}

export default Body
