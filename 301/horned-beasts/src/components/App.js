import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import data from '../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggles: {
        header: true,
        footer: true
      },
      show: false,
      hornedBeasts: data,
      selected: data[0],
    };
  }

  toggler = e => {
    const tagName = e.target.parentElement.tagName.toLowerCase();
    this.setState({
      toggles: {
        [tagName]: !this.state.toggles[tagName]
      }
    });
  }

  handleOpen = () => {
    this.setState({show: true});
  }

  handleClose = () => {
    this.setState({show: false});
  }

  selectedHornedBeast = clickedBeast => {
    const selectedBeast = this.state.hornedBeasts.find(hornedBeast => hornedBeast._id === clickedBeast._id);
    this.setState({selected: selectedBeast});
  };

  selectedNumberOfHorns = e => {
    if (+e.target.value === 0) this.setState({hornedBeasts: data});
    else {
      const beastsByHornCount = data.filter(hornedBeast => hornedBeast.horns === +e.target.value);
      this.setState({hornedBeasts: beastsByHornCount});
    }
  }

  render = () => {
    return (
      <>
        <Header
          handleClick={this.toggler}
          isToggled={this.state.toggles.header}
          selectedNumberOfHorns={this.selectedNumberOfHorns}/>
        <Main
          onShow={this.handleOpen}
          hornedBeasts={this.state.hornedBeasts}
          selected={this.selectedHornedBeast}/>
        <SelectedBeast
          show={this.state.show}
          onHide={this.handleClose}
          selected={this.state.selected}/>
        <Footer
          handleClick={this.toggler}
          isToggled={this.state.toggles.footer}/>
      </>
    );
  }
}

export default App;
