import React from 'react';
import 'fontsource-roboto';
import PropTypes from 'prop-types'
import styles from './Footer.module.css';

const Footer = ({ count, onClickFilter }) => (
  <div className={styles.wrap}>
    <div className={styles.wrap_state}>
      <button
        className={styles.task_state}
        onClick={() => onClickFilter('all')}
      >All</button>
      <span className={styles.task_state}>|</span>
      <button
        className={styles.task_state}
        onClick={() => onClickFilter('done')}
      >Сompleted</button>
      <span className={styles.task_state}>|</span>
      <button
        className={styles.task_state}
        onClick={() => onClickFilter('active')}
      >Active</button>
    </div>
    <div className={styles.task}>How many things to do: {count}</div>
  </div>
);

Footer.defaultProps = {
  count: 1
};

Footer.propTypes = {
  count: PropTypes.number
}

export default Footer;