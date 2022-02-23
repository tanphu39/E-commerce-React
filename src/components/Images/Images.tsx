import React from 'react';
import cn from 'classnames';

import styles from "./Images.module.scss";

interface Props {
    type: 'primary' | 'secondary' | 'logo' | 'avatar' | 'contact';
    link?: string;
    className?: string;
    onClick?: () => void;
}

const Images: React.FC<Props> = ({
    children,
    className = "",
    link = "",
    type = "",
    onClick = () => {},
}) => {
    const imageClassName = cn({
        [styles["images"]]: true,
        [styles["primary"]]: type === 'primary',
        [styles["secondary"]]: type === 'secondary',
        [styles["logo"]]: type === 'logo',
        [styles["avatar"]]: type === 'avatar',
        [styles["contact"]]: type === 'contact',
    })

    return (
        <div>
            <img src = {link} alt = "Not found" className = {imageClassName} />
        </div>
    )
}

export default Images
