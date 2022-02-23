import React, { ReactChild } from 'react';

import cn from "classnames";

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

interface HeaderProps extends LayoutProps{
  isFixed?: boolean;
}

interface BodyProps extends LayoutProps{
  greyBackground?: boolean;
  isHeaderFixed?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const layoutClassName = cn({
    [styles["layout"]]: true,
  });

  return <div className={layoutClassName}>{children}</div>;
};

export const Body: React.FC<BodyProps> = ({ greyBackground, children, isHeaderFixed }) => {
  const bodyClassName = cn({
    [styles["body"]]: true,
    [styles['header-fixed']]: isHeaderFixed,
    [styles["greyBackground"]]: greyBackground,
  });

  return (
    <div className={bodyClassName}>
      <div className={styles["container"]}>{children}</div>
    </div>
  );
};

export const Header: React.FC<HeaderProps> = ({ isFixed, children }) => {
  const headerClassName = cn({
    [styles["header"]]: true,
    [styles["fixed"]]: isFixed,
  });
  return (
    <div className={headerClassName}>
      <div className={styles["container"]}>{children}</div>
    </div>
  );
};
