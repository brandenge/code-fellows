import React from 'react';

import axios from 'axios';

import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Form from './components/AddItem.js';
import Items from './components/Items.js';

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      items: []
    }
  }

  addItem = async (item) => {
    try {
      await axios.post(`${API_SERVER}/items`, item);
      this.getItems();
    } catch (error) {
      console.error('Error in addItem', error);
    }
  }

  getItems = async () => {
    try {
      const response = await axios.get(`${API_SERVER}/items`);
      const items = response.data;
      this.setState({ items });
    } catch (error) {
      console.error('Error in getItems', error);
    }
  }

  deleteItem = async (itemId) => {
    try {
      await axios.delete(`${API_SERVER}/items/${itemId}`);
      this.getItems();
    } catch (error) {
      console.error('Error in deleteItem', error);
    }
  }

  async componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">301 Final!</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col><h1>Our Items</h1></Col>
          </Row>
          <Row>
            <Col md="auto">
              <Form handleAddItem={this.addItem} />
            </Col>
            <Col>
              <Items itemsList={this.state.items} handleDeleteItem={this.deleteItem}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
