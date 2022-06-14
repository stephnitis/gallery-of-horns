import React from 'react';
import './Hornedbeast.css';

class Hornedbeast extends React.Component {

  constructor(props){
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
          <h2>{this.props.title}</h2>
          <img
            src={this.props.image_url}
            alt={this.props.keyword}
            title={this.props.title}
          />
          <p>{this.props.description}</p><br/>
          <p>{this.state.likes} 💙</p>
          <p onClick={this.handleLikes}>Like</p>
        </article>

      </>
    );
  }
}

export default Hornedbeast;