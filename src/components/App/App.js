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
    ]
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id == id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ items: newItemList });
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Todos</h1>
        <InputItem />
        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
        <Footer count={this.state.count} onClickFooter={this.onClickFooter} />
      </div>);
  }
}

export default App;