import React from 'react';

class Hornedbeast extends React.Component {

  render() {
    return (
      <>    
         <article>
          <h2>{this.props.name}</h2>
          <p>{this.props.description}</p>
          </article>
          
      </>
    );
  }
}

export default Hornedbeast;