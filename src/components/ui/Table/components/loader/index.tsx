import styles from './index.module.css';

const GridLoader = () => {
  return (
    <div className={styles.lds_ripple}>
      <div></div>
      <div></div>
    </div>
  );
};

export { GridLoader };
