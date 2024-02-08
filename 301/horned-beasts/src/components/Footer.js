import React from 'react';

function Footer(props) {
  let title = '';
  let style = {};
  if (props.isToggled) {
    title = 'Branden Ge'
    style = { backgroundColor: 'orange'};
  } else {
    title = 'Not Branden Ge';
    style = {
      color: 'white',
      backgroundColor: 'darkblue'
    };
  }
  return (
    <footer onClick={props.handleClick}>
      <h3 style={style}>{title}</h3>
    </footer>
  );
}

export default Footer;
