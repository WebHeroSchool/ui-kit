import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import 'fontsource-roboto';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

class Item extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  };

  componentDidUpdate() {
    console.log('componentDidUpdate');
  };

  componentWillUnmount() {
    console.log('componentWillUnmount');
  };

  render() {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;
    return (
      <div div className={styles.wrap} >
        <Checkbox
          checked={isDone}
          onClick={() => onClickDone(id)}
        />
        <span className={
          classnames({
            [styles.item]: true,
            [styles.done]: isDone
          })}> {value}
        </span >
        <div className={styles.delete_icon}>
          <DeleteIcon onClick={() => onClickDelete(id)} />
        </div>
      </div>
    );
  }
}

export default Item;