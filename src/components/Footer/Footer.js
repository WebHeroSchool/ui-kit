import React from 'react';
import 'fontsource-roboto';
import PropTypes from 'prop-types'
import styles from './Footer.module.css';

const Footer = ({ count }) => (
  <div className={styles.task}>Осталось выполнить вот столько дел: {count}</div>
);

Footer.defaultProps = {
  count: 2
};

Footer.propTypes = {
  count: PropTypes.number
}

export default Footer;