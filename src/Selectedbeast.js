import React from 'react';
import Modal from 'react-bootstrap/Modal'

class Selectedbeast extends React.Component {


  render() {

    return (

      <Modal className='h-100 p-5'
        show={this.props.showModal}
        onHide={this.props.handleOnHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectBeast.description}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="img-fluid" 
            src={this.props.selectBeast.image_url}
            alt={this.props.selectBeast.alt}
         />        
        </Modal.Body>
      </Modal>

    )
  }
}

export default Selectedbeast;