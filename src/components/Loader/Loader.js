import React from 'react';
import LoaderComponent from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <LoaderComponent type="Grid" color="#96bdb9" height={100} width={100} />
    </div>
  );
};

export default Loader;
