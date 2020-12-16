import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Card from '@material-ui/core/Card';

const App = () =>
(<Router>
  <div className={styles.container} >
    <Card className={styles.sidebar}>
      <MenuList>
        <Link to='/' className={styles.link}><MenuItem>ABOUT</MenuItem></Link>
        <Link to='/todo' className={styles.link}><MenuItem>TODO</MenuItem></Link>
        <Link to='/contacts' className={styles.link}><MenuItem>CONTACTS</MenuItem></Link>
      </MenuList>
    </Card>

    <Card className={styles.content}>
      <Route path='/' exact component={About} />
      <Route path='/todo' component={Todo} />
      <Route path='/contacts' component={Contacts} />
    </Card>

  </div >
</Router>);

export default App;