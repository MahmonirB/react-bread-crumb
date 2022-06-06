import React from 'react';
import styles from './BreadCrumbList.module.css';
import BreadCrumb from '../BreadCrumb/BreadCrumb';

interface IProps {
    breadCrumbList: Array<string>;
    title?: string;
    onClick?: () => void;
}

const PRIMARY = '#2C5EB2';
const SECONDARY = '#D5DFF0';

function BreadCrumbList({ breadCrumbList, title = '' }: IProps) {
  return (
    <div className={styles.container}>
        {title && <BreadCrumb
          data={{
            label: title,
            color: 'white',
          }}
        />}

        {breadCrumbList?.map((item: string, index: number) => {
          return (
            <div key={`item-${item}-${index}`}>
              {index !== breadCrumbList.length - 1 && (
                <BreadCrumb
                  key={item}
                  data={{
                    label: item,
                    color: 'white',
                    borderColor: SECONDARY ,
                    labelColor: PRIMARY,
                  }}

                />
              )}
            </div>
          )
        })}
        
        <BreadCrumb data={{ label: breadCrumbList[breadCrumbList.length - 1], labelColor: 'white', color: PRIMARY, borderColor: PRIMARY }} />
    </div>
  );
}

export default BreadCrumbList;
