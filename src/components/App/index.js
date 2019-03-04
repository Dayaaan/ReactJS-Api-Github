/**
 * NPM import
 */
import React from 'react';
import axios from 'axios';

/**
 * Local import
 */
import SearchBar from 'src/components/SearchBar';
import Repos from 'src/components/Repos';
import Contents from 'src/components/Contents';
import ErrorMessage from 'src/components/ErrorMessage';
// Data temporaire
// import demoResults from 'src/data/results';

import './app.scss';

/**
 * Code
 */
class App extends React.Component {
  /**
   * State Initiale
   */
  state = {
    searchValue: '',
    view: 'home',
    loading: false,
    items: [],
    mode: 'grid',
    contents: [],
    errorMessage: '',
  };

  changeSearchInput = (value) => {
    this.setState({
      searchValue: value,
    });
  }

  saveResults = ({ data }) => {
    const items = data.items.map(item => ({
      id: item.id,
      name: item.name,
      fullname: item.full_name,
      avatar: item.owner.avatar_url,
      description: item.description,
      url: item.url,
    }));

    this.setState({
      items,
      loading: false,
      view: 'results',
    });
  }

  showError = (error) => {
    this.setState({
      loading: false,
      errorMessage: error.message,
    });
}

  submitSearch = () => {
    this.setState({
      loading: true,
    });

    const { searchValue } = this.state;
    const url = `https://api.github.com/search/repositories?q=${searchValue}`;

    axios.get(url)
      .then(this.saveResults)
      .catch(this.showError);
  }

  switchMode = mode => () => {
    this.setState({
      mode,
    });
  }

  getRepoContent = url => () => {
    this.setState({ loading: true });
    axios.get(`${url}/contents`)
      .then(this.saveContents)
      .catch(this.showError);
  }

  saveContents = ({ data }) => {
    this.setState({
      loading: false,
      view: 'contents',
      contents: data,
    });
  }

  render() {
    const {
      searchValue,
      view,
      loading,
      items,
      mode,
      contents,
      errorMessage,
    } = this.state;
    return (
      <div id="app">
        <SearchBar
          inputValue={searchValue}
          onInputChange={this.changeSearchInput}
          onSubmitValue={this.submitSearch}
          isLoading={loading}
        />
        { errorMessage !== '' && (
          <ErrorMessage message={errorMessage} />
        )}
        {view === 'results' && (
          <Repos
            items={items}
            displayMode={mode}
            onSwitch={this.switchMode}
            onGetContent={this.getRepoContent}
          />
        )}
        { view === 'contents' && (
          <Contents
            contents={contents}
          />
        ) }
      </div>
    );
  }
}

/**
 * Export
 */
export default App;
