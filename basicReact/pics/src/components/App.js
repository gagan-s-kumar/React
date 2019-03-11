import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  state = { images: [] };

  async onSearchSubmit (term) {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      },
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  };
};

export default App;
