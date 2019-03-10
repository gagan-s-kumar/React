import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMsg: '',
    };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMsg: err.message })
      }
    );
  }

  render() {
    if (!this.state.latitude && this.state.errorMsg) {
      return (<div>Error: { this.state.errorMsg }</div>);
    } else if (this.state.latitude && !this.state.errorMsg) {
      return (<div>Latitude: { this.state.latitude }</div>);
    } else {
      return (<div>Loading</div>);
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
