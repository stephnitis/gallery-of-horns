import React from 'react';
import data from './data.json';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Hornedbeast from './Hornedbeast';
import Selectedbeast from './Selectedbeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectBeast: {},
      data: data
    };
  }


  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

  handleShowModal = (description, image_url, alt) => {
    let hornBeast = {
      description: description,
      image_url: image_url,
      alt: alt
    }
    this.setState({
      showModal: true,
      selectBeast: hornBeast
    })
  }

  handleHorns = (event) => {
    event.preventDefault();
    let numHorns = event.target.value;
    if (numHorns === '1') {
      let oneHorn = data.filter(num => num.horns === 1);
      this.setState({
        data: oneHorn,
      })
    } else if (numHorns === '2') {
      let twoHorns = data.filter(num => num.horns === 2);
      this.setState({
        data: twoHorns
      })
    } else if (numHorns === '3') {
      let threeHorns = data.filter(num => num.horns === 3);
      this.setState({
        data: threeHorns
      })
    } else if (numHorns === '100') {
      let manyHorns = data.filter(num => num.horns === 100);
      this.setState({
        data: manyHorns
      })
    } else {
      this.setState({
        data: data
      })
    }

    console.log(this.handleSubmit)

  }




  render() {
    return (
      <>
        <Header />
        <Main
          data={this.state.data}
          handleShowModal={this.handleShowModal}
          handleOnHide={this.handleOnHide}
          showModal={this.showModal}
          handleHorns={this.handleHorns}
        />
        <Hornedbeast
          handleShowModal={this.handleShowModal}
        />
        <Selectedbeast
          handleOnHide={this.handleOnHide}
          showModal={this.state.showModal}
          selectBeast={this.state.selectBeast}
          handleShowModal={this.handleShowModal}
        />
        <Footer />
      </>
    );
  }
}

export default App;
