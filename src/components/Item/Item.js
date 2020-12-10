import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import 'fontsource-roboto';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ value, isDone, onClickDone, id, onClickDelete }) => (
  <div className={styles.wrap}>
    <Checkbox
      checked={isDone}
      onClick={() => onClickDone(id)} />
    <span className={
      classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })}> {value}
    </span >
    <div
      className={styles.delete_icon}
    ><DeleteIcon
        onClick={() => onClickDelete(id)} />
    </div>
  </div>
);

Item.defaultProps = {
  isDone: false
};

export default Item;