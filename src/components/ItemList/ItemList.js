import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';


const ItemList = ({ items, onClickDone }) => (
  <ul
    className={styles.list}>
    {items.map(item => <li key={item.value}>
      <Item
        value={item.value}
        isDone={item.isDone}
        onClickDone={onClickDone}
        id={item.id}
      />
    </li>)}
  </ul>);

export default ItemList;