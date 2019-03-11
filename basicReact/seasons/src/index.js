import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { latitude: null, errorMsg: '' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMsg: err.message })
    );
  }

  renderContent() {
    if (!this.state.latitude && this.state.errorMsg) {
      return (<div>Error: { this.state.errorMsg }</div>);
    } else if (this.state.latitude && !this.state.errorMsg) {
      return (<SeasonDisplay latitude={this.state.latitude}/>);
    } else {
      return (<Spinner message="Please accept location request"/>);
    }
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
