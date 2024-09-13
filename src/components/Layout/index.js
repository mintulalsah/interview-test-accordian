import React from 'react';
import styles from "../../styles/employee.module.css"


const Layout = ({ children, className }) => {
  return (
    <div className={styles.mainLaout}>
      {children}
    </div>
  );
};

export default Layout;
