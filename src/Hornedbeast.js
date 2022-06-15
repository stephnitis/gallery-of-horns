import React from 'react';
import './Hornedbeast.css';
import Row from 'react-bootstrap/Row'
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

  render() {
    return (
      <>
        <article>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={this.props.image_url} />
                  <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Card.Text>{this.state.likes} 💙</Card.Text>
                    <Button variant="primary" onClick={this.handleLikes}>Like</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </article>





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