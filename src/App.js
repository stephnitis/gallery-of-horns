import React from 'react';
import data from './data.json';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
// import Modal from 'react-bootstrap/Modal'
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
    let hornBeast ={
      description: description,
      image_url: image_url,
      alt: alt
    }
    this.setState({
      showModal: true,
      selectBeast: hornBeast
    })
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
{/*         
        <Modal
          show={this.state.showModal}
          onHide={this.handleOnHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedBeast}</Modal.Title>
          </Modal.Header>
        </Modal> */}
      </>
    );
  }
}

export default App;
