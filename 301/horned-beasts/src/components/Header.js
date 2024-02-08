import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Header(props) {
  let title = '';
  let style = {};
  if (props.isToggled) {
    title = 'Horned Beasts'
    style = { backgroundColor: 'orange'};
  } else {
    title = 'Animals with Horns';
    style = {
      color: 'white',
      backgroundColor: 'darkblue'
    };
  }
  return (
    <header>
      <Form>
        <InputGroup>
          <Form.Label>Search:</Form.Label>
          <FormControl/>
          <Button variant='outline-secondary' id='button-addon2'>
            Search
          </Button>
        </InputGroup>
        <Form.Select size='lg' onChange={props.selectedNumberOfHorns}>
          <option value='0'>Open this select menu</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='100'>100</option>
        </Form.Select>
      </Form>
      <h1 onClick={props.handleClick} style={style}>{title}</h1>
    </header>
  );
}

export default Header;
