import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import 'fontsource-roboto';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'Купить продукты',
        isDone: false,
        id: 1
      },
      {
        value: 'Заправить машину',
        isDone: false,
        id: 2
      },
      {
        value: 'Постирать кроссовки',
        isDone: true,
        id: 3
      }
    ],
    count: 3
  };

  onClickDone = id => {
    const newItemListDone = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ items: newItemListDone });
  };

  onClickDelete = id => {
    const deleteItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: deleteItems });
  };

  onClickAdd = value => this.setState(state => ({
    items: [
      ...state.items,
      {
        value,
        isDone: false,
        id: state.count + 1
      }
    ],
    count: state.count + 1
  }));

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Todos</h1>
        <InputItem
          onClickAdd={this.onClickAdd} />
        <ItemList
          items={this.state.items}
          onClickDone={this.onClickDone}
          onClickDelete={this.onClickDelete} />
        <Footer count={3} />
      </div>);
  }
}

export default App;