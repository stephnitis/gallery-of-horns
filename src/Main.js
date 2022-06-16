import React from 'react';
import { Container, Row} from 'react-bootstrap';
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
        // hearts={this.state.heart}
        // onClick={this.addHearts}
        />
      )
    })

    return (
      <main>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {hornBeast}
          </Row>
        </Container>
      </main >
    )
  }
}

export default Main;