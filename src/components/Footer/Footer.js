import React from 'react';
import 'fontsource-roboto';
import styles from './Footer.module.css';

const Footer = ({ count, onClickFooter }) => (
  <div className={styles.task} onClick={onClickFooter}>Осталось выполнить вот столько дел: {count}</div>
);

export default Footer;