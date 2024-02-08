import { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Accordian from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class Items extends Component {

  render() {

    return (
      <section>
        <Accordian defaultActiveKey='0'>
          <Accordian.Item>
            <Accordian.Header>Items</Accordian.Header>
            <Accordian.Body>
              {
                this.props.itemsList.map((item, idx) =>
                  <Item key={item._id} itemData={item} handleDeleteItem={this.props.handleDeleteItem} idx={idx} />
                )
              }
            </Accordian.Body>
          </Accordian.Item>
        </Accordian>
      </section>
    );
  }
}

class Item extends Component {

  render() {

    const itemData = this.props.itemData;

    return (
      <Card>
        <Card.Title style={{ padding:'10px', textAlign:'center' }}>{itemData.name}</Card.Title>
        <Card.Body style={{ backgroundColor: 'lightgray' }}>
          {itemData.description}
        </Card.Body>
        <Button data-testid={`delete-button-${itemData.name}`} onClick={() => this.props.handleDeleteItem(this.props.itemData._id)}>Delete Item</Button>
      </Card>
    );
  }
}

export default Items;
