import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component {

  render = () => {
    const hornedBeastComponents = this.props.hornedBeasts.map(currentBeast => {
      return (
        <Col style={{padding: '0px'}} key={currentBeast._id}>
          <HornedBeast
            hornedBeast={currentBeast}
            onShow={this.props.onShow}
            selected={this.props.selected}/>
        </Col>
      );
    });
    return (
      <Container>
        <Row sm={1} md={2} lg={3} xl={4} xxl={5}>
          {hornedBeastComponents}
        </Row>
      </Container>
    );
  }
}

export default Main;
