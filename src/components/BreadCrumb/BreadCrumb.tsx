import React from 'react';
import styles from './BreadCrumb.module.css';

export interface IBreadCrumb {
  data: {
    borderColor?: string;
    color: string;
    label: string;
    labelColor?: string;
  }
}

const BreadCrumb = ({ data }: IBreadCrumb) => {
  const { borderColor, color, label, labelColor } = data;

  
  return (
    <div className={styles.outSide} style={{ backgroundColor: borderColor }}>
      <div className={styles.container} style={{ backgroundColor: color }}>
        <div className={styles.label} style={{ color: labelColor }}>
          {label}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
