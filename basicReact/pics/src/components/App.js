import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 857f89c5e08f3bffc191f5cadf85d2ad38f22ba0e425ec339aa90d3d15e0dc12'
      }
    });
    console.log(response.data.results);
  }

  render() {
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  };
};

export default App;
