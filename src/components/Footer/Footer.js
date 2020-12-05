import React from 'react';
import 'fontsource-roboto';
import styles from './Footer.module.css';

const Footer = ({ count }) => (
  <div className={styles.task}>Осталось выполнить вот столько дел: {count}</div>
);

export default Footer;