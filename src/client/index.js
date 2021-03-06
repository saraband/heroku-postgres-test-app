import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    fetch(`${APP_BASE_URL}/images`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((images) => {this.setState({ images }); console.log(images);});
  }

  render () {
    return (
      <div>
        <h1>{APP_BASE_URL || 'database'}</h1>
        {this.state.images.map(({ url, id }) => <img key={id} src={url} alt={url} />)}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
