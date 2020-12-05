import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import 'fontsource-roboto';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ value, isDone }) => (<div className={styles.wrap}><span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })}> {value}
</span >
  <div className={styles.delete_icon}><DeleteIcon /></div>
</div>
);

export default Item;