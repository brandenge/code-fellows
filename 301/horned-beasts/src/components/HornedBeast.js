import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritesCount: 0 };
  }

  increment = () => {
    this.setState({favoritesCount: this.state.favoritesCount + 1});
  }

  render() {
    return (
      <Card className='card'>
        <Card.Img variant='top' src={this.props.hornedBeast.image_url}
          onClick={() => {
            this.props.selected(this.props.hornedBeast);
            this.props.onShow();
          }}
          alt={this.props.hornedBeast.description} title={this.props.hornedBeast.title}/>
        <Card.Body onClick={this.increment}>
          <Card.Title>{this.props.hornedBeast.title}</Card.Title>
          <Card.Text>{this.props.hornedBeast.description}</Card.Text>
          <Card.Footer>❤️ Number of Favorites: {this.state.favoritesCount}</Card.Footer>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
