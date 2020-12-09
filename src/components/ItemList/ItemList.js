import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <ul
    className={styles.list}>
    {items.map(item => <li
      key={item.id}>
      <Item
        value={item.value}
        isDone={item.isDone}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
        id={item.id}
      />
    </li>)}
  </ul>);

export default ItemList;