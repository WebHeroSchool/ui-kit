import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import 'fontsource-roboto';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';

const Todo = () => {
  const state = {
    items: [
      {
        value: 'first todo',
        isDone: false,
        id: 1
      },
      {
        value: 'second todo',
        isDone: false,
        id: 2
      }],
    count: 3
  }

  const [items, setItems] = useState(state.items);
  const [count, setCount] = useState(state.count);

  useEffect(() => {
    console.log("componentDidUpdate")
  });

  useEffect(() => {
    console.log("componentDidMount")
  }, []);

  const onClickDone = id => {
    const newItemListDone = items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !newItem.isDone;
      }
      return newItem;
    });
    setItems(newItemListDone);
  };

  const onClickDelete = id => {
    const deleteItems = items.filter(item => item.id !== id);
    setItems(deleteItems);
  };

  const onClickAdd = value => {
    const newItemListAdd = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1
      }
    ];

    setItems(newItemListAdd);
    setCount((count) => count + 1);
  };

  return (
    <div className={styles.container}>
      <CardContent>
        <h1 className={styles.title}>Todos</h1>
        <InputItem
          onClickAdd={onClickAdd} />
        <ItemList
          items={items}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete} />
        <Footer />
      </CardContent>
    </div >
  );
}


Todo.propTypes = {
  isDone: PropTypes.bool,
  id: PropTypes.number
}

Todo.defaultProps = {
  isDone: false
};

export default Todo;