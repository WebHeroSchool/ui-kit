import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';
import 'fontsource-roboto';

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    fetchReposRequest: [],
    fetchReposFailure: false,
    userAvatar: [],
    error: {}
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'DianaZaharova'
    }).then(({ data }) => {
      this.setState({
        fetchReposRequest: data,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        fetchReposFailure: true,
        error: error
      })
    });

    octokit.users.getByUsername({
      username: 'DianaZaharova',
    }).then(response => {
      this.setState({
        userAvatar: response.data.avatar_url,
        name: response.data.login
      })
    }).catch(err => {
      this.setState({
        isLoading: false,
        isError: true
      })
    })
  }


  render() {
    const { isLoading, fetchReposRequest, name, userAvatar, fetchReposFailure, error } = this.state;
    return (
      <CardContent>
        <h1 className={styles.title}>{isLoading ? <CircularProgress color="secondary" /> : 'My repositories'}</h1>
        <h2 className={styles.subtitle}>My name is {name}</h2>
        <img src={userAvatar} alt="Аватар" />
        {!fetchReposFailure && <div>{error.message}</div>}
        {!isLoading && <ol>
          {fetchReposRequest.map(repo => (<li className={styles.list} key={repo.id}>
            {repo.name}
            <a className={styles.link} href={repo.html_url}>Link on GitHub</a>
            <a className={styles.link} href={repo.homepage}>Link on project</a>
          </li>))}
        </ol>}
      </CardContent>
    );
  }
}

export default About;