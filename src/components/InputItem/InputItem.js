import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    error: false,
    errorMessage: '',
    inputLebel: 'Добавить задание',
  };

  error = (message) => {
    this.setState({
      errorMessage: message,
      error: true,
      inputLebel: "Ошибка",

    })
  }

  onCleanInput = () => {
    this.setState({
      inputValue: ''
    });

    this.props.onClickAdd(this.state.inputValue);
  }



  render() {
    const { onClickAdd } = this.props;

    return (
      <div className={styles.wrap}>
        <TextField
          error={this.state.error}
          id="filled-password-input"
          helperText={this.state.errorMessage}
          label={this.state.inputLebel}
          color="secondary"
          fullWidth
          value={this.state.inputValue}
          onChange={event => this.setState({ inputValue: event.target.value.toUpperCase() })}
        />
        <div className={styles.wrap_button}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => {
              if (this.state.inputValue !== '') {
                onClickAdd(this.state.inputValue);
                this.setState({
                  error: false,
                  inputLebel: 'Добавить задание',
                  inputValue: '',
                  errorMessage: ''
                })
              }

              if (this.state.inputValue === '') {
                this.error('Ты не можешь добавить пустое поле')
              }
            }}
          >
            Добавить
              </Button>
        </div>
      </div >
    )
  }
}

export default InputItem;