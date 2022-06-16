import React from 'react';
import './Hornedbeast.css';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';


class Hornedbeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  handleLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  handleModalClick = () => {
    console.log('They Clicked')
    this.props.handleShowModal(this.props.description, this.props.image_url, this.props.alt);
  }

  render() {
    return (
      <>
        <Col className='mb-5 mt-5'>
          <Card
            className='h-100 p-3'>
            <Card.Header
              className='text-center'
            >
              {this.props.title}
            </Card.Header>
            <Card.Img onClick={this.handleModalClick} variant="top" src={this.props.image_url} />

            <Card.Body className='mt-3 mb-3'>
              <Card.Text>{this.props.description}</Card.Text>
            </Card.Body>

            <Card.Footer>
              <Card.Text className='p-3'>{this.state.likes} 💙&nbsp;&nbsp;&nbsp;
              <Button variant="primary" onClick={this.handleLikes}>Like</Button>
              </Card.Text>
              {/* <Card.Text>{this.state.hearts}</Card.Text> */}
            </Card.Footer>
          </Card>
        </Col>






        {/* <h2>{this.props.title}</h2>
        <img
          src={this.props.image_url}
          alt={this.props.keyword}
          title={this.props.title}
        />
        <p>{this.props.description}</p><br />
        <p>{this.state.likes} 💙</p>
        <p onClick={this.handleLikes}>Like</p> */}


      </>
    );
  }
}

export default Hornedbeast;