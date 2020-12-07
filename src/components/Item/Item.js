import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import 'fontsource-roboto';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ value, isDone, onClickDone }) => (
  <div className={styles.wrap}>
    <Checkbox
      checked={isDone}
      onClick={() => console.log(isDone)}
    /><span className={
      classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })}> {value}
    </span >
    <div className={styles.delete_icon}><DeleteIcon /></div>
  </div>
);

export default Item;