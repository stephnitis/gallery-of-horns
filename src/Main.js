import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import Hornedbeast from './Hornedbeast';
import './Main.css';

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     heart: '',
  //   };
  // }

  // addHearts = () => {
  //   this.setState({
  //     heart: '💙'
  //   })
  // }

  render() {
    let hornBeast = this.props.data.map((beast, idx) => {
      return (
        <Hornedbeast
          title={beast.title}
          image_url={beast.image_url}
          alt={beast.keyword}
          description={beast.description}
          handleShowModal={this.props.handleShowModal}
          key={idx}
          horns={beast.horns}
        // hearts={this.state.heart}
        // onClick={this.addHearts}
        />
      )
    })




    return (
      <>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {hornBeast}
          </Row>
        </Container>
        <Form className='text-center' onSubmit={this.handleSubmit}>
          <Form.Label className="text-center">How Many Horns Do You Like On Your Beast?
            <Form.Select horns="selected" onChange={this.props.handleHorns}>
              <option>Single Horned or Polycerate?</option>
              <option value='1'>Uni-horned Beasts Plz</option>
              <option value='2'>Two horns are better than one!</option>
              <option value='3'>Triple horn threat!</option>
              <option value='100'>I like my beasts like I like my centepedes.</option>
            </Form.Select>
          </Form.Label><br />
          <Button variant="primary" type="submit">
            See the Beasts
          </Button>
        </Form>
      </>
    )
  }
}

export default Main;