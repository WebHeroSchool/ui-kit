import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const InputItem = () => (
  <div className={styles.wrap}>
    <TextField
      id="filled-password-input"
      label="Добавить задание"
      type="password"
      color="secondary"
      fullWidth
    /></div>
);

export default InputItem;